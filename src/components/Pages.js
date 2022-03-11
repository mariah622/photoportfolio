// pages component
import Photos from "./photos/Photo";
import Cameras from './cameras/Cameras'
import Homepage from './Homepage'
import Aboutus from "./Aboutus";

import {
    Routes, 
    Route
} from 'react-router-dom'

export default function Pages({page}) {

    return <Routes>
        <Route path='cameras' element={<Cameras/>}/>
        <Route path='photos' element={<Photos/>}/>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/Aboutus' element={<Aboutus/>}/>

    </Routes>

}