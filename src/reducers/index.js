import { combineReducers } from "redux";
import cameraReducer from "./cameraReducer";
import photoReducer from "./photoReducer";
import reviewReducer from "./reviewReducer";

const rootReducer = combineReducers({
    cameraReducer,
    photoReducer,
    reviewReducer
})

export default rootReducer