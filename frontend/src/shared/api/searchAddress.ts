import { mapBoxApiToken } from '@shared/config';
import axios from 'axios';
import { SearchAddressParams, SearchGeocodeParams, SearchGeocodeResponse } from './model';

const apiUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';

export const searchAddress = async ({
  language,
  lat,
  lng,
}: SearchAddressParams): Promise<SearchGeocodeResponse | undefined> => {
  try {
    const currentUrl = `${apiUrl}${lng},${lat}.json`;

    const { data } = await axios.get<SearchGeocodeResponse>(currentUrl, {
      params: {
        access_token: mapBoxApiToken,
        language,
      },
    });

    return data;
  } catch (e) {
    console.log(e);
  }
};
