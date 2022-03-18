export interface MapInitialState {
  geocodeText: string | null;
  lngLat: {
    lat: number;
    lng: number;
  } | null;
}

export type UpdateMapStatePayload = Partial<MapInitialState>;
