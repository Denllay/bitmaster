export interface GeocodeFeatureItem {
  id: string;
  placeName: string;
  lat: number;
  lng: number;
}

interface OnSearchFinishParams {
  lat: number;
  lng: number;
  text: string;
}

export type OnSearchFinish = (data: OnSearchFinishParams) => void;
