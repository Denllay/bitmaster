import { fetchCrews } from '@shared/api/fetchCrews';
import moment from 'moment';
import { crewsModel } from '..';

interface Props {
  lat: number;
  lng: number;
  address: string;
}

export const getCrews =
  ({ address, lat, lng }: Props): AppThunk =>
  async (dispatch) => {
    const params = {
      source_time: moment().format('YYYYMMDDhhmmss'),
      addresses: [
        {
          lon: lng,
          address,
          lat,
        },
      ],
    };

    const data = await fetchCrews(params);

    if (!data) {
      return;
    }

    const currentData = data.sort((a, b) => a.distance - b.distance);

    dispatch(crewsModel.UpdateCrews(currentData));
  };
