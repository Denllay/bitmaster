import moment from 'moment';
import { orderCrew as orderCrewApi } from '@shared/api';
interface Params {
  address: string;
  lat: number;
  lng: number;
  crewId: number;
}

export const orderCrew =
  ({ address, crewId, lat, lng }: Params): AppThunk =>
  () => {
    const params = {
      source_time: moment().format('YYYYMMDDhhmmss'),
      crew_id: crewId,
      addresses: [
        {
          lon: lng,
          address,
          lat,
        },
      ],
    };

    orderCrewApi(params);
  };
