import React from "react";
import { Button, Card } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import readBook from "../../assets/images/bg/readBook.jpeg";
import readFriend from "../../assets/images/bg/readFriend.jpeg";
import readList from "../../assets/images/bg/readList.jpeg";
import { useNavigate, useParams } from "react-router-dom";

const firstCardCssStyle: React.CSSProperties[] = [
  { width: "40em", margin: "2em" },
  {
    height: "12em",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
  },
  { fontSize: "1.7em", marginBottom: ".5em" },
  {
    fontSize: "1em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  { marginRight: "15em", textAlign: "start" },
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
];
const cssStyle:React.CSSProperties = { display: "flex", flexDirection: "column" }
const secondCardCssStyle: React.CSSProperties[] = [
    { width: "30em", margin: "2em" },
    {
        height: "10em",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
      },
      { fontSize: "1.7em", marginBottom: ".5em" },
      {
        fontSize: "1em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      { marginRight: "15em", textAlign: "start" },
      {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }
]
const thirdCardCssStyle: React.CSSProperties[] = [
    { width: "35em", margin: "2em" },
    {
        height: "10em",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
      },
      { fontSize: "1.7em", marginBottom: ".5em" },
      {
        fontSize: "1em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      { marginRight: "15em", textAlign: "start" },
      {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }
]
const CardBox: React.FC = () => {
  let navi =useNavigate()
  const gotoSearch = ()=>{
    navi('/search')
  }
  const gotoBookShelf = ()=>{
    navi('/bookShelf')
  }
  const gotoFriend = ()=>{
    navi('/friend')
  }
  return (
    <div className="CardBox">
      <Card
        hoverable
        style={firstCardCssStyle[0]}
        cover={<img alt="example" src={readBook} />}
        onClick={gotoSearch}
      >
        <div style={firstCardCssStyle[1]}>
          <div style={firstCardCssStyle[2]}>??????????????????</div>
          <div style={firstCardCssStyle[3]}>
            <span style={firstCardCssStyle[4]}>
              ??????????????????????????????????????????????????????????????????
            </span>
            <Button
              type="primary"
              style={firstCardCssStyle[5]}
              icon={<ArrowRightOutlined />}
              shape="round"
              
            ></Button>
          </div>
        </div>
      </Card>
      <div style={cssStyle}>
        <Card
          hoverable
          style={secondCardCssStyle[0]}
          cover={<img alt="example" src={readFriend} />}
          onClick={gotoFriend}
        >
          <div
            style={secondCardCssStyle[1]}
          >
            <div style={secondCardCssStyle[2]}>
              ?????????
            </div>
            <div
              style={secondCardCssStyle[3]}
            >
              <span style={secondCardCssStyle[4]}>
                ?????????????????????????????????
              </span>
              <Button
                type="primary"
                style={secondCardCssStyle[5]}
                icon={<ArrowRightOutlined />}
                shape="round"
                
              ></Button>
            </div>
          </div>
        </Card>
        <Card
          hoverable
          style={thirdCardCssStyle[0]}
          cover={<img alt="example" src={readList} />}
          onClick={gotoBookShelf}
        >
          <div
            style={thirdCardCssStyle[1]}
          >
            <div style={thirdCardCssStyle[2]}>
              ????????????
            </div>
            <div
              style={thirdCardCssStyle[3]}
            >
              <span style={thirdCardCssStyle[4]}>
                ?????????????????????DIY??????????????????
              </span>
              <Button
                type="primary"
                style={thirdCardCssStyle[5]}
                icon={<ArrowRightOutlined />}
                shape="round"
                
              ></Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CardBox;
