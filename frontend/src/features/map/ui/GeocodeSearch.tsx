import { FC, RefObject, useEffect } from 'react';
import { AutoComplete, Form, FormInstance } from 'antd';
import { MapRef } from 'react-map-gl';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { useSearchGeocode } from '@features/map';
import { useTypedSelector } from '@shared/model';
import { mapModel } from '@entities/map';
import styles from './styles.module.scss';
import _ from 'lodash';

interface Props {
  mapRef: RefObject<MapRef>;
  form: FormInstance;
}

export const GeocodeSearch: FC<Props> = ({ mapRef, form }) => {
  const { geocodeText } = useTypedSelector(mapModel.mapSelector);
  const { featuresList, onSearchChange, onClear, onSearchFinish } = useSearchGeocode(mapRef);

  const featuresListEl = featuresList?.map(({ placeName, id }, index) => {
    return (
      <AutoComplete.Option value={index.toString()} key={id}>
        {placeName}
      </AutoComplete.Option>
    );
  });

  useEffect(() => {
    form.setFieldsValue({ geocode: geocodeText });
  }, [geocodeText]);

  return (
    <Form
      form={form}
      onFinish={() => {
        console.log('a');
      }}
    >
      <Form.Item
        name="geocode"
        label="Откуда:"
        rules={[
          {
            required: true,
            message: 'Это поле обязательно',
          },
        ]}
      >
        <AutoComplete allowClear onClear={onClear} value={geocodeText} onChange={onSearchChange} onSelect={onSearchFinish}>
          {featuresListEl}
        </AutoComplete>
      </Form.Item>
    </Form>
  );
};
