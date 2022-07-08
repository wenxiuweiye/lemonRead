import React, { useState, useEffect } from "react";
import 'animate.css'
import axios from "axios";
import "./Home.less";
import TitleHome from "../../components/homeComponents/TitleHome";
import CardBox from "../../components/homeComponents/CardBox";
// const getcards = axios.get("http://www.lemons.asia/assets/book/bookAllMessage");
// const getspaceBook = axios.get(
//   "http://www.lemons.asia/assets/book/bookAllMessage"
// );

const Home: React.FC = () => {
  // const [cards, setcards] = useState([]);
  // const [spaceBook, setspaceBook] = useState([]);
  // useEffect(() => {
  //   getcards.then((e) => {
  //     setcards(e.data);
  //   });
  //   getspaceBook.then((e) => {
  //     setspaceBook(e.data);
  //   });
    
  // });
  const [TitleHomeShow,setTitleHomeShow] = useState(false)
  useEffect(()=>{
    window.onscroll = (e:any )=>{
      
      if(e.currentTarget.scrollY>100){
          setTitleHomeShow(true)
      }
      if(e.currentTarget.scrollY>700){
        setTitleHomeShow(false)
      }
      if(e.currentTarget.scrollY<100){
        setTitleHomeShow(false)
      }
    }
  },[TitleHomeShow])
  return (
    <div className="Home">
      <TitleHome show={TitleHomeShow}></TitleHome>
      <CardBox></CardBox>
    </div>
  );
};
export default Home;
