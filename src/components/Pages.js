// pages component

import Photos from "./photos/Photo";
import Cameras from "./cameras/Camera";

import {
    Routes, 
    Route
} from 'react-router-dom'

export default function Pages({page}) {

    // function renderPage(){
    //     switch(page) {
    //         case "Cameras":
    //             return <Cameras/>
            
    //         case "Photos":
    //             return <Photos/>
            
    //         default:
    //             break;

    //     }
    // }
    // return <div>
    //     {renderPage()}

    // </div>

    return <Routes>
        <Route path='cameras' element={<Cameras/>}/>
        <Route path='photos' element={<Photos/>}/>
        {/* <Route/> */}

    </Routes>

}