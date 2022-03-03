import { useState, useEffect } from 'react'
import CameraList from './CameraList'
import React from 'react'


export default function Cameras(){
    const [camera, setCamera] = useState([])


    useEffect(()=> {
        fetch('http://localhost:3000/cameras')
        .then(resp => resp.json())
        .then(data => console.log(data))

    }, [])

    return <div>
        <h1>Cameras</h1>
        {/* <CameraForm/> */}
        <CameraList/>
        {/* <CameraCard/> */}
    </div>
}