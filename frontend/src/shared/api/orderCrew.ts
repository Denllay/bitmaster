import axios from 'axios';
import { FetchCrewsResponse, OrderCrewParams } from './model';

const apiUrl = 'http://localhost:5000/order_crew';

export const orderCrew = async (data: OrderCrewParams): Promise<void> => {
  try {
    axios.post<void>(apiUrl, data);
  } catch (e) {
    console.log(e);
  }
};
