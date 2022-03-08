import { GET_CAMERAS } from "../actions/actionTypes";

const initialState = {
  cameras:[]
}

function cameraReducer(state = initialState, action){
  switch(action.type) {
    case GET_CAMERAS:
      return {
        ...state,
        cameras: action.payload
      }

    default:
      return state;
  }

  
}

export default cameraReducer