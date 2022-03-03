import { useState, useEffect} from 'react'
import CameraList from './CameraList'
import CameraForm from './CameraForm'
import React from 'react'


export default function Camera(){
    const [camera, setCamera] = useState([])


    useEffect(()=> {
        fetch('http://localhost:3000/cameras')
        .then(resp => resp.json())
        .then(data => setCamera(data))
        

    }, [])

    console.log(camera)

    return <div>
        <h1>Cameras</h1>
        <CameraForm/>
        <CameraList camera={camera}/>
        {/* <CameraCard/> */}
    </div>
}