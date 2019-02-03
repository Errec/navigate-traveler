import { FETCH_TRAVELS } from './types.js'

export const fetchTravels = () => dispath => {


  dispath({
    type: FETCH_TRAVELS,
    payload: {
      chart: [],
      isLoaded: true
    }
  })

}

