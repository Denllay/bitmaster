import { crewsModel } from '@entities/crews';
import { mapModel } from '@entities/map';
import { searchAddress } from '@shared/api';

interface Params {
  lat: number;
  lng: number;
}

export const updateSearchGeocode =
  ({ lat, lng }: Params): AppThunk =>
  async (dispatch) => {
    const data = await searchAddress({ language: 'ru', lat, lng });

    if (!data) {
      return;
    }

    const currentGeocodeText = data.features[0].place_name;
    dispatch(mapModel.UpdateMapState({ lngLat: { lat, lng }, geocodeText: currentGeocodeText }));
    dispatch(crewsModel.getCrews({ address: currentGeocodeText, lat, lng }));
  };
