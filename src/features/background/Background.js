import React from 'react';
import './Background.css';
import logo from '../../logo.svg';
import bg from '../../pics/bg.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from './BackgroundSlice';
export default function Background() {
    const dispatch=useDispatch();
    dispatch(getImages());
    return ( 
     
            <div id="background-img-container">
            <img src={bg} id="background-img" />
            </div>
     
    )
}