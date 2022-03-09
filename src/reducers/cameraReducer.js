import { GET_CAMERAS, ADD_CAMERA, EDIT_CAMERA, DELETE_CAMERA } from "../actions/actionTypes";

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
    
    case EDIT_CAMERA:
      idx = state.cameras.findIndex(c => c.id === action.payload.id)

      return {
        ...state, 
        cameras: [
          ...state.cameras.slice(0, idx),
          action.payload,
          ...state.cameras.slice(idx + 1)
        ]

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
