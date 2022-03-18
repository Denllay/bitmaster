import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MapInitialState, UpdateMapStatePayload } from '../types';

const initialState: MapInitialState = {
  lngLat: null,
  geocodeText: null,
};

export const Map = createSlice({
  name: 'Map',
  initialState,
  reducers: {
    UpdateMapState: (state, { payload }: PayloadAction<UpdateMapStatePayload>) => {
      return { ...state, ...payload };
    },
    UpdateGeocode: (state, { payload }: PayloadAction<string>) => {
      state.geocodeText = payload;
    },
  },
});

export const { UpdateMapState, UpdateGeocode } = Map.actions;
export const { reducer } = Map;
