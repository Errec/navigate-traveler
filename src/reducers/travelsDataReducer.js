import { FETCH_TRAVELS } from '../actions/types';

const initialState = {
  travels: {
    travelsListData: [],
    isLoaded: false
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TRAVELS:
      return {
        ...state,
        travels: action.payload
      }
    default:
       return state;
  }
}