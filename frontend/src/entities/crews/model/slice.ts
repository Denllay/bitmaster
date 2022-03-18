import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CrewItem, CrewsInitialState } from '../types';

const initialState: CrewsInitialState = {
  crewsList: null,
  rightCrew: null,
};

export const Crews = createSlice({
  name: 'Crews',
  initialState,
  reducers: {
    UpdateCrews: (state, { payload }: PayloadAction<CrewItem[]>) => {
      const rightCrewIndex = 0;

      state.crewsList = payload;
      state.rightCrew = payload[rightCrewIndex];
    },

    UpdateRightCrew: (state, { payload }: PayloadAction<number>) => {
      const currentRightCrew = state.crewsList?.find(({ crewId }) => crewId === payload);

      if (currentRightCrew) {
        state.rightCrew = currentRightCrew;
      }
    },
  },
});

export const { UpdateCrews, UpdateRightCrew } = Crews.actions;
export const { reducer } = Crews;
