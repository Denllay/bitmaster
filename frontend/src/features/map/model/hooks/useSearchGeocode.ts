import { GeocodeFeatureItem, OnSearchFinish } from '@features/map/types';
import { useForm } from 'antd/lib/form/Form';
import _ from 'lodash';
import { ChangeEvent, RefObject, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchGeocode } from '@shared/api';
import { mapModel } from '@entities/map';
import { MapRef } from 'react-map-gl';
import { AutoCompleteProps } from 'antd';
import { crewsModel } from '@entities/crews';

export const useSearchGeocode = (mapRef: RefObject<MapRef>) => {
  const [featuresList, setFeaturesList] = useState<GeocodeFeatureItem[] | null>(null);
  const dispatch = useDispatch();

  const onSearchChange = async (address: string) => {
    dispatch(mapModel.UpdateGeocode(address));

    const data = await searchGeocode({ geocode: address });

    if (!data || !data.features.length) {
      return setFeaturesList(null);
    }

    const currentFeatures = data.features?.map(
      ({ id, place_name, center }): GeocodeFeatureItem => ({
        id,
        placeName: place_name,
        lat: center[1],
        lng: center[0],
      })
    );

    setFeaturesList(currentFeatures);
  };

  const onSearchFinish = (index: string) => {
    if (!featuresList) {
      return;
    }

    const { lat, lng, placeName } = featuresList[Number(index)];

    mapRef.current?.flyTo({ center: [lng, lat], zoom: 16 });
    dispatch(mapModel.UpdateMapState({ lngLat: { lat, lng }, geocodeText: placeName }));
    dispatch(crewsModel.getCrews({ address: placeName, lat, lng }));
  };

  const onClear = () => {
    setFeaturesList(null);
  };
  return { onSearchFinish, onSearchChange, featuresList, onClear };
};
