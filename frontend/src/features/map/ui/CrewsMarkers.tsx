import { crewsModel, CrewItem } from '@entities/crews';
import { useTypedSelector } from '@shared/model';
import { Marker } from 'react-map-gl';

export const CrewsMarkers = () => {
  const { crewsList } = useTypedSelector(crewsModel.crewsSelector);

  if (!crewsList) {
    return null;
  }

  const crewListMarkersEl = crewsList?.map(({ lat, lng, crewId }) => {
    return <Marker key={crewId} color="#00ff2a" longitude={lng} latitude={lat}></Marker>;
  });

  return <>{crewListMarkersEl} </>;
};
