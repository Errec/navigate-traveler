import { FETCH_TRAVELS } from './types.js'
import axios from 'axios'

export const fetchTravels = (date) => dispath => {
  const URL = `http://api.ntstage.com/v1/bookingsweb/availability?searchDate=${date}&routeId=4&amountResultsAfter=100&amountResultsBefore=0`;

  axios.get(URL).then((response) => {
    // console.log(response.data.data)

    dispath({
      type: FETCH_TRAVELS,
      payload: {
        travelsListData: response.data.data,
        isLoaded: true
      }
    });

  }).catch((err) => {
    console.log(err) // TODO: SHOW ERROR TO USER
  }); 
}

