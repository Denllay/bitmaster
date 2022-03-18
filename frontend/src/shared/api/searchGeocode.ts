import { mapBoxApiToken } from '@shared/config';
import axios from 'axios';
import { SearchGeocodeParams, SearchGeocodeResponse } from './model';

const apiUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';

export const searchGeocode = async ({ geocode }: SearchGeocodeParams): Promise<SearchGeocodeResponse | undefined> => {
  try {
    const currentUrl = `${apiUrl}${geocode}.json`;

    const { data } = await axios.get<SearchGeocodeResponse>(currentUrl, {
      params: {
        access_token: mapBoxApiToken,
      },
    });

    return data;
  } catch (e) {
    console.log(e);
  }
};
