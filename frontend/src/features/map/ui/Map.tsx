import { Map as UIMap, MapRef } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useMap } from '@features/map';
import { MapMarker } from '@entities/map';
import { CSSProperties, FC, RefObject } from 'react';
import { mapBoxApiToken } from '@shared/config';
import { CrewsMarkers } from './CrewsMarkers';

interface Props {
  mapRef: RefObject<MapRef>;
}

const initialViewState = {
  latitude: 56.855532,
  longitude: 53.217462,
  zoom: 14,
};

const mapStyle: CSSProperties = {
  height: '100%',
  width: '70%',
};

export const Map: FC<Props> = ({ mapRef, children }) => {
  const { updateMapCenter } = useMap(mapRef);

  return (
    <UIMap
      style={mapStyle}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      ref={mapRef}
      initialViewState={initialViewState}
      onClick={updateMapCenter}
      mapboxAccessToken={mapBoxApiToken}
    >
      <MapMarker />
      <CrewsMarkers />
      {children}
    </UIMap>
  );
};
