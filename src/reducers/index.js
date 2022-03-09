import { combineReducers } from "redux";
import cameraReducer from "./cameraReducer";
import photoReducer from "./photoReducer";

const rootReducer = combineReducers({
    cameraReducer,
    photoReducer
})

export default rootReducer