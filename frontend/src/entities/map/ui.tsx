import { mapModel } from '.';
import { Marker as UIMarker } from 'react-map-gl';
import { useTypedSelector } from '@shared/model';

export const Marker = () => {
  const { lngLat } = useTypedSelector(mapModel.mapSelector);

  if (!lngLat) {
    return null;
  }

  return <UIMarker color="#faff00" longitude={lngLat.lng} latitude={lngLat.lat} />;
};
