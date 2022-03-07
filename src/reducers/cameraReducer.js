import { GET_PEOPLE } from "../actions/actionTypes";

export default function cameraReducer (
    state = { photos: []},
    action
  ) {
    switch (action.type) {
  
      case GET_PEOPLE:
        return {
          ...state,
          cameras: action.payload,
        };
  
      default:
        return state;
    }
  }