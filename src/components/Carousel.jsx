import React, { useState } from "react";
import "./Carousel.css";
import { Image } from "@mui/icons-material";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel(props) {
    var[val,setvalue]=useState(0);
    const handleClick=()=>{
        if(val<props.data.length-1){
            setvalue(val+1)
            console.log(setvalue);
        }
    }
    const handleClick1=()=>{
        if(val>0){
            setvalue(val-1)
        }
    }
    return(
        <>
        <h1>Carousel</h1>
        <div className="carousel-container flex">
            <div className="leftArrow arrowDiv flex" onClick={handleClick1} >
                <ArrowBackIosIcon/>
            </div>
            <h2 className="title">{props.data[val].title}</h2>
            <img src={props.data[val].img} alt="" />
            <h4 className="caption">{props.data[val].subtitle}</h4>
            <div className="rightArrow arrowDiv flex" onClick={handleClick}>
                <ArrowForwardIosIcon/>
            </div>

        </div>
    </>
    )
}

export default Carousel;