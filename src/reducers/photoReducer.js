import { GET_PHOTOS, ADD_PHOTO, DELETE_PHOTO} from "../actions/actionTypes";

const initialState = {
  photos:[]
}

function photoReducer(state = initialState, action){
  let idx;
  switch(action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        photos: action.payload
      }
    case ADD_PHOTO:
        return {...state,
            photos: [...state.photos, action.payload]
        }
    
    
    case DELETE_PHOTO:
        idx = state.photos.findIndex(p => p.id === action.payload)
        return {...state,
            photos: [
                ...state.photos.slice(0,idx),
                ...state.photos.slice(idx + 1)
            ]
        }
    
    default:
      return state;
  }

  
}

export default photoReducer