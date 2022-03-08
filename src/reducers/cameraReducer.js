import { GET_CAMERAS } from "../actions/actionTypes";

export default function cameraReducer (
    state = { photos: []},
    action
  ) {
    switch (action.type) {
  
      case GET_CAMERAS:
        return {
          ...state,
          cameras: action.payload,
        };
  
      default:
        return state;
    }
  }