import React, { useState } from "react";
import {
  WifiOutlined,
  SmileOutlined,
  SendOutlined,
  PlusCircleOutlined,
  LeftOutlined,
  UserOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { Input,Avatar } from "antd";
import phone from "../../assets/images/bg/phone.png";
import leftTextBox from '../../assets/images/bg/leftTextBox.png';
import rightTextBox from '../../assets/images/bg/rightTextBox.png';
const ContentFriend: React.FC = () => {
    const [communicationalName, setcommunicationalName] = useState("叼毛");
  const box = 1<2?(
    <div className="leftDialogFriendLine">
        <Avatar size={"small"} icon={<UserOutlined></UserOutlined>}></Avatar>
        <div className="leftDialogFriend" style={{backgroundImage:`url(${leftTextBox})`,backgroundSize: "100% 100%",}}>
            <div className="textLeftDialogFriend">
                好尼瑪累啊
            </div>
        </div>
    </div>
  ):(
    <div className="rightDialogFriendLine">
        <div style={{"backgroundImage":`url(${rightTextBox})`}}></div>
        <img src="" alt="" />
    </div>
  )
  return (
    <div
      className="contentFriend"
      style={{
        backgroundImage: `url(${phone})`,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="leftContant">
        <div className="butLF"></div>
        <div className="butLS"></div>
        <div className="butLT"></div>
      </div>
      <div className="centerContant">
        <div className="headFriend">
          <WifiOutlined style={{ marginRight: "5%" }} />
        </div>
        <div className="titleFriend">
          <LeftOutlined />
          <div style={{ fontSize: ".5em" }}>{communicationalName}</div>
          <EllipsisOutlined />
        </div>
        <div className="messageFriend">{box}</div>
        <div className="barFriend">
          <SmileOutlined />
          <Input
            style={{ borderRadius: ".5em", width: "70%", height: "50%" }}
          ></Input>
          <SendOutlined />
          <PlusCircleOutlined />
        </div>
      </div>
      <div className="rightContant">
        <div className="butR">1</div>
      </div>
    </div>
  );
};


export default ContentFriend