import { GET_CAMERAS } from "./actionTypes";

// export const getCameras = (cameras) => {
//     return {
//         type: GET_CAMERAS,
//         payload: cameras
//     }
// }

export const fetchCameras = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/cameras')
        .then(resp => resp.json())
        .then(data => dispatch({type: GET_CAMERAS, payload:data}))

    }
    

}