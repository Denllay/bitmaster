import { crewsModel } from '@entities/crews';
import { mapModel } from '@entities/map';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    map: mapModel.MapReducer,
    crews: crewsModel.CrewsReducer,
  },
});
