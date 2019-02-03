import { FETCH_TRAVELS } from '../actions/types';

const initialState = {
  travelsData: {
    list: [],
    isLoaded: false
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TRAVELS:
      return {
        ...state,
        travelsData: action.payload
      }
    default:
       return state;
  }
}