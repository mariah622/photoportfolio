import { GET_PEOPLE } from "../actions/actionTypes";

const getPeople = (cameras) => {
    return {
        type: GET_PEOPLE,
        payload: cameras
    }
}