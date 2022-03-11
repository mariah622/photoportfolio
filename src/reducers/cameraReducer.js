import { GET_CAMERAS, ADD_CAMERA, DELETE_CAMERA } from "../actions/actionTypes";

const initialState = {
  cameras:[]
}

function cameraReducer(state = initialState, action){
  let idx;
  switch(action.type) {
    case GET_CAMERAS:
      return {
        ...state,
        cameras: action.payload
      }

    case ADD_CAMERA:
      return {
        ...state, 
        cameras: [...state.cameras, action.payload]
      }
    
    case DELETE_CAMERA:
      
      idx = state.cameras.findIndex(c => c.id === action.payload)
  
      return {
        ...state, 
        cameras: [
          ...state.cameras.slice(0, idx),
          ...state.cameras.slice(idx + 1)
        
        ]

      }



    default:
      return state;
  }

  
}

export default cameraReducer
