import { CovidData } from './CovidData'

export interface CovidGlobalData {
  critical: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
  affectedCountries: number;
  baseData: CovidData;
}
