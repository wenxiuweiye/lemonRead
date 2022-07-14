import React ,{useEffect, useState} from 'react';

interface Props {
    cards: cardsProps[];
  }
  interface cardsProps {
    pros: number;
    cons: number;
    bookName: string;
    _id: string;
    author: string;
    price: number;
    label: string;
    message:string;
    feedback:number
  }
const List : React.FC<Props> = ({cards})=>{
     cards.forEach((element)=>{
        Object.defineProperty(element,'feedback',{
            value:((element.pros/(element.pros+element.cons))*100).toFixed(3)
        })
     })
     const listing = cards.map((element)=>{
             return (
        <div className='list'>
          <div className='listNumber'>{cards.indexOf(element)+1}</div>
          <div className='listImg'>
            <img src={`http://localhost:3033/assets/book//bookImage/?bookName=${element.bookName}`} alt="" />
          </div>
          <div className='boxlistMessage'>
            <div className='listMessage'>
                <div className='listBookName'>{element.bookName}</div>
                <div>{element.author}</div>
                <div>好评率：{element.feedback}</div>
                <div className='listInfo'>{element.message}</div>
            </div>
          </div>
        </div>
      );
     })
 
    return(
       <div className='uist'> {listing}</div>
    )
}

export default List