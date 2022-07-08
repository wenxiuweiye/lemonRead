import React, { useEffect, useState } from "react";
import { Image } from "antd";
import bookShelfLineOne from "../../assets/images/bg/bookShelfLineOne.png";

interface Props {
  spaceBook: spaceBookProps[];
}
interface spaceBookProps {
  pros: number;
  cons: number;
  bookName: string;
  _id: string;
  author: string;
  price: number;
  label: string;
}


const BookShelf: React.FC<Props> = ({spaceBook}) => {
const onFocus = (e:any)=>{
  console.log(e)
}
const space = spaceBook.map(element=>{
  return(
    <li  className='sp' onClick={onFocus}>
      <Image width={100} src={`http://www.lemons.asia/assets/book/bookImage?bookName=${element.bookName}`}></Image>
    </li>
    )
})

useEffect(()=>{

    window.onscroll = (e:any)=>{

      if(e.currentTarget.scrollY>200){
        Array.from(document.getElementsByClassName("sp")).forEach((element)=>{
          element.setAttribute("class","enter")
        })
      }
    }
})
  return (
    <div className="bookShelf">
      <ul>
        {space}
      </ul>
      <div></div>
    </div>
  );
};
export default BookShelf;
