// pages component
import CameraContainer from "../containers/CameraContainer";
import Homepage from './Homepage'
import Aboutus from "./Aboutus";
import Reviews from "./reviews/Reviews";

import {
    Routes, 
    Route
} from 'react-router-dom'
import PhotoContainer from "../containers/PhotoContainer";
import PhotographerContainer from "../containers/PhotographerContainer";

export default function Pages({page}) {

    return <Routes>
        <Route path='cameras' element={<CameraContainer/>}/>
        <Route path='photos' element={<PhotoContainer/>}/>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/Aboutus' element={<Aboutus/>}/>
        <Route path='/reviews' element={<Reviews/>}/>
        <Route path='/photographers' element={<PhotographerContainer/>}/>
     

    </Routes>

}