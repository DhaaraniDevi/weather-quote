import React from 'react';
import './Background.css';
import bg from '../../pics/bg.jpg';
import { useDispatch } from 'react-redux';
import { getImages } from './BackgroundSlice';
export default function Background() {
    const dispatch=useDispatch();
    dispatch(getImages());
    return ( 
     
            <div id="background-img-container">
            <img src={bg} id="background-img" alt="background-pic" />
            </div>
     
    )
}