export interface CrewsInitialState {
  crewsList: CrewItem[] | null;
  rightCrew: CrewItem | null;
}

export interface CrewItem {
  crewId: number;
  carMark: string;
  carModel: string;
  carNumber: string;
  carColor: string;
  driverName: string;
  lat: number;
  lng: number;
  distance: number;
}
