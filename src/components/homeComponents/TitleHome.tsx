import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import books from "../../assets/images/bg/books.png";
import coolBg from "../../assets/images/bg/coolBg.png";
import "animate.css";
interface Props {
  show: boolean;
}
const textLeftArr = [
  { text: "好读书，不求甚解。——陶渊明", id: "0" },
  { text: "书犹药也，善读之可医愚。——刘向", id: "1" },
  { text: "但患不读书，不患读书无所用。——朱舜水", id: "2" },
  { text: "不学诗，无以言。——孔子", id: "3" },
  { text: "读书百遍，其义自现。——三国志", id: "4" },
  { text: "人生在勤，不索何获。——张衡", id: "5" },
  { text: "为中华之崛起而读书。——周恩来", id: "6" },
  { text: "学而不思则罔，思而不学则殆。——孔子", id: "7" },
  { text: "读书要玩味。——程颢", id: "8" },
  { text: "一日不书，百事荒芜。——李诩", id: "9" },
  { text: "人生不得行胸怀，虽寿百岁犹为无也。——南史", id: "10" },
  { text: "进学致和，行方思远。——字严", id: "11" },
  { text: "少壮不努力，老大徒伤悲。——《长歌行》", id: "12" },
  { text: "书山有路勤为径，学海无涯苦作舟。——韩愈", id: "13" },
];

const textRightArr = [
  { text: "莫等闲，白了少年头，空悲切。——岳飞", id: "0" },
  { text: "读书破万卷，下笔如有神。——杜甫", id: "1" },
  { text: "书读百遍，其义自见。——陈寿", id: "2" },
  { text: "业精于勤，荒于嬉;行成于思，毁于随。——韩愈", id: "3" },
];

const backgroundImage: React.CSSProperties[] = [
  { backgroundImage: `url(${coolBg})` },
  { backgroundImage: `url(${books})` },
];

const TitleHome: React.FC<Props> = ({ show }) => {
  const liLeftList = textLeftArr.map((element) => {
    return (
      <CSSTransition
        in={show}
        key={element.id}
        timeout={500}
        classNames={{
          exit: "animate__animated animate__bounceOut",
          exitActive: "animate__animated animate__bounceOut",
          enter: "animate__animated animate__bounceIn",
          enterActive: "animate__animated animate__bounceIn",
        }}
        unmountOnExit
      >
        <li id={element.id}>{element.text}</li>
      </CSSTransition>
    );
  });
  const liRightList = textRightArr.map((element) => {
    return (
      <CSSTransition
        in={show}
        key={element.id}
        timeout={500}
        classNames={{
          exit: "animate__animated animate__bounceOut",
          exitActive: "animate__animated animate__bounceOut",
          enter: "animate__animated animate__bounceIn",
          enterActive: "animate__animated animate__bounceIn",
        }}
        unmountOnExit
      >
        <li id={element.id}>{element.text}</li>
      </CSSTransition>
    );
  });
  return (
    <div className="titleHome" style={backgroundImage[0]}>
      <div className="wordsHome">让世界读好书</div>
      <div className="bookTip" style={backgroundImage[1]}>
        <ul className="leftTip">{liLeftList}</ul>
        <div className="rightTip">
          <ul>{liRightList}</ul>
          <CSSTransition
            in={show}
            timeout={500}
            classNames={{
              exit: "animate__animated animate__bounceOut",
              exitActive: "animate__animated animate__bounceOut",
              enter: "animate__animated animate__bounceIn",
              enterActive: "animate__animated animate__bounceIn",
            }}
            unmountOnExit
          >
            <div className="logoTip">LemonRead</div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

export default TitleHome;
