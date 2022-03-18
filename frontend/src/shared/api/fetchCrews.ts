import axios from 'axios';
import { FetchCrewsParams, FetchCrewsResponse } from './model';

const apiUrl = 'http://localhost:5000/crews_info';

export const fetchCrews = async (params: FetchCrewsParams): Promise<FetchCrewsResponse | undefined> => {
  try {
    const { data } = await axios.get<FetchCrewsResponse>(apiUrl, {
      params,
    });

    return data;
  } catch (e) {
    console.log(e);
  }
};
