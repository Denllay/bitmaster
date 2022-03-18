import { StringGradients } from 'antd/lib/progress/progress';

export interface SearchGeocodeResponse {
  attribution: string;
  query: string[];
  type: string;
  features: {
    id: string;
    place_name: string;
    place_type: string[];
    properties: {
      wikidata: string;
    };
    relavnce: 1;
    text: string;
    bbox: number[];
    center: [number, number];
    context: {
      id: string;
      short_code: string;
      text: string;
      wikidata: string;
    };
    geometry: {
      coordinates: [number, number];
      type: string;
    };
  }[];
}

export interface SearchGeocodeParams {
  geocode: string;
}

export interface SearchAddressParams {
  language: string;
  lng: number;
  lat: number;
}

export type FetchCrewsResponse = {
  crewId: number;
  carMark: string;
  carModel: string;
  carNumber: string;
  carColor: string;
  driverName: string;
  lat: number;
  lng: number;
  distance: number;
}[];

export interface FetchCrewsParams {
  source_time: string;
  addresses: { address: string; lat: number; lon: number }[];
}

export interface OrderCrewParams {
  source_time: string;
  crew_id: number;
  // addresses: { address: string; lat: number; lon: number }[];
}
