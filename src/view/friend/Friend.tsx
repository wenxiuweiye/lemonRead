import React, { useEffect } from "react";
import "./Friend.less";
import ContentFriend from "../../components/friendComponents/ContantFriend";
import RightFriend from "../../components/friendComponents/RightFriend";
import LeftFriend from "../../components/friendComponents/LeftFriend";
import axios from "axios";


const Friend: React.FC = () => {
  useEffect(()=>{
    axios({
      url:"http://www.lemons.asia/dislog",
      
    }).then((e)=>{
      console.log(e.data)
    })
  })

  return (
    <div className="friend">
        <LeftFriend></LeftFriend>
        <ContentFriend ></ContentFriend>
        <RightFriend></RightFriend>
    </div>
  );
};

export default Friend;
