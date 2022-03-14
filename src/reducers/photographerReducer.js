import { GET_PHOTOGRAPHERS, ADD_PHOTOGRAPHER } from "../actions/actionTypes";

const initialState = {
  photographers:[]
}

function reviewReducer(state = initialState, action){
  switch(action.type) {
    case GET_PHOTOGRAPHERS:
      return {
        ...state,
        photographers: action.payload
      }

    case ADD_PHOTOGRAPHER:
      return {
        ...state, 
        photographers: [...state.photographers, action.payload]
      }

    default:
      return state;
  }

  
}

export default reviewReducer
