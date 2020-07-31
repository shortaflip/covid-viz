import { ActionContext } from 'vuex'
import { covidEP } from '../shared/constants/'
import { CovidData, CovidGeneralInfo } from '../types/'

interface RootState {
  value: string;
}

interface CovidState {
  covidData: CovidData;
}

export const covid = {
  state: () => ({
    covidData: {} as CovidData
  }),
  getters: {
    getCovidGeneralInfo: (state: CovidState): CovidGeneralInfo => {
      const data: CovidData = state.covidData

      return {
        country: data.country,
        cases: data.cases,
        deaths: data.deaths,
        recovered: data.recovered,
        tests: data.tests,
        updated: data.updated
      }
    }
  },
  mutations: {
    setCovidData: (state: CovidState, data: CovidData): void => {
      state.covidData = data
    }
  },
  actions: {
    getCovidData: async ({ commit }: ActionContext<RootState, RootState>): Promise<void> => {
      const res = await fetch(covidEP.COVID_API_BASE_URL + covidEP.COVID_API_COUNTRY)
      const data = await res.json()
      commit('setCovidData', data)
    }
  }
}
