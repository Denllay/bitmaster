import { mapModel } from '@entities/map';
import { useTypedSelector } from '@shared/model';
import { Button, FormInstance } from 'antd';
import _ from 'lodash';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { orderCrew } from '../model';
import styles from './styles.module.scss';

interface FormValues {
  geocode: string;
}

interface Props {
  form: FormInstance<FormValues>;
}

export const OrderButton: FC<Props> = ({ form }) => {
  const dispatch = useDispatch();
  const { lat, lng, rightCrewId } = useTypedSelector((state) => {
    const { lat, lng } = state.map.lngLat || {};

    return {
      rightCrewId: state.crews.rightCrew?.crewId,
      lat,
      lng,
    };
  }, _.isEqual);

  const onClick = async () => {
    try {
      const { geocode } = await form.validateFields();

      if (rightCrewId && lat && lng) {
        dispatch(orderCrew({ address: geocode, crewId: rightCrewId, lat, lng }));
      }
    } catch {}
  };

  return (
    <Button onClick={onClick} className={styles.order_button}>
      Заказать
    </Button>
  );
};
