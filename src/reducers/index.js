import { combineReducers } from "redux";
import cameraReducer from "./cameraReducer";
import photoReducer from "./photoReducer";
import reviewReducer from "./reviewReducer";
import photographerReducer from './photographerReducer'


const rootReducer = combineReducers({
    cameraReducer,
    photoReducer,
    reviewReducer,
    photographerReducer
 
})

export default rootReducer