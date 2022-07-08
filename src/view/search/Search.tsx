import { Card, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import { SearchOutlined, EnterOutlined } from "@ant-design/icons";
import "./Search.less";
import axios from "axios";

const {Meta} = Card
const Search: React.FC = () => {
    const navi = useNavigate()
  const [searchValue, setsearchValue] = useState(undefined);
  const [backData, setbackData] = useState([]);

  const changeValue = (e: any) => {
    const str = /[]/
    console.log(e.target.value)
    if (e.target.value != "") {
        if(str){
            setsearchValue(e.target.value);
        }   
    }
  };

  const dataSearch = backData.map((element: any) => {
    return (
        <Card
          hoverable
          onClick={()=>{
            navi(`/introduce?bookName=${element.bookName}&author=${element.author}&price=${element.price}&cons=${element.cons}&pros=${element.pros}&label=${element.label}`)
          }}
          style={{margin:"1em", width: "15em",height:"8em",display:"flex",alignItems:"center" }}
          cover={
            <img
            style={{width:"5em"}}
              alt="example"
              src={`http://www.lemons.asia/assets/book/bookImage?bookName=${element.bookName}` }
            />
          }
        >
          <Meta style={{"width":"15em"}}
           title={element.bookName.length>6?`${element.bookName.slice(0,6)}...`:element.bookName}
           description={element.author.length>6?`${element.author.slice(0,6)}...`:element.author} />
        </Card>
    );
  });
  useEffect(() => {
    axios({
      url: `http://www.lemons.asia/assets/book/bookOneMessage?bookName=${searchValue}`,
    }).then((e) => {
      setbackData(e.data);
    });
  }, [searchValue]);
  return (
    <div className="search">
      <div className="logoBoxSearch">
        <img className="logoSearch" src={logo}></img>
      </div>
      <div className="contentSearch">
        <Input
          onChange={changeValue}
          placeholder="請輸入書名或者作家名"
          addonAfter={<EnterOutlined  />}
          size="large"
          addonBefore={<SearchOutlined  />}
          style={{
            width: "50em",
            height: "5em",
            display: "flex",
            alignItems: "center",
          }}
        ></Input>
        <div className="ajaxMessageSearch">{dataSearch}</div>
      </div>
    </div>
  );
};
export default Search;
