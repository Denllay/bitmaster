import { mapModel } from '@entities/map';
import { RefObject, useRef } from 'react';
import { MapRef } from 'react-map-gl';
import { useDispatch } from 'react-redux';
import { updateSearchGeocode } from '../actions';

export const useMap = (mapRef: RefObject<MapRef>) => {
  const dispatch = useDispatch();

  const updateMapCenter = ({ lngLat }: mapboxgl.MapLayerMouseEvent) => {
    const { lat, lng } = lngLat;

    mapRef.current?.flyTo({ center: [lng, lat], zoom: 16 });

    dispatch(updateSearchGeocode({ lat, lng }));
  };

  return { updateMapCenter };
};
