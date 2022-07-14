import axios from "axios";
import React, { useEffect, useState } from "react";
import List from "../../components/bookListComponents/List";
import total_list from "../../assets/images/bg/total_list.png";
import raising_list from '../../assets/images/bg/raising_list.png';
import new_list from '../../assets/images/bg/new_list.png';
import "./BookShelf.less";
import { Divider } from "antd";
import NaviList from "../../components/bookListComponents/NaviList";


const BookShelf: React.FC = () => {
  const listNumber = ["总榜", "新书榜", "飙升榜"];
  const imgkey = ['total_list','new_list','raising_list']
  const [key,setkey] = useState(0)
  const [cards, setcards] = useState([]);
  const [imgbook,setimgbook] = useState(imgkey[0])
  const getcards = axios.get(`http://www.lemons.asia/assets/book/top_total?list=${listNumber[key]}`);
  useEffect(() => {
    getcards.then((e) => {
      setcards(e.data); 
      setimgbook(imgkey[key])
    });
  }, [key]);

  return (
    <div className="bookShelf">
        <NaviList returnKey={setkey} listArr={listNumber}></NaviList>

        <div className="contentbookShelf">
            <div className="titlecontentbookShelf">
                <img src={imgbook} alt="" />
            </div>
            <Divider></Divider>
            <List cards={cards}></List>
        </div>
    </div>
  )
};

export default BookShelf;


