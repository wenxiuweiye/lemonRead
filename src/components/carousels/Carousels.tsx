import { Carousel } from "antd";
import axios from "axios";
import React from "react";
const contentStyle: React.CSSProperties = {
    width:"100%",
    color: "#fff",
    textAlign: "center",
  };

const Carousels : React.FC=()=>{
  const number = [0,1,2,3,4]
  const arrDiv = number.map((value)=>{
    return <div><img style={contentStyle} src={`http://www.lemons.asia/assets/book/swiper/?index=${value}`}></img></div>
  })
    return(
         <div className="carouselBox">
          <Carousel  className="carousel" autoplay >{arrDiv}</Carousel>
         </div>
    )
}
export default  Carousels