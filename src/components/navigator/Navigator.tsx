import React,{useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { DownloadOutlined,HomeOutlined,MenuOutlined,LoginOutlined } from '@ant-design/icons';
import type {MenuProps,} from 'antd';
import githublogo from '../../assets/images/logo/github-fill-white.png';
import {Menu} from 'antd';
//
interface Props{
    naviMode:MenuProps['mode']
}
const items:MenuProps['items'] = [
    {
        label:<Link to={"/"}>柠檬读书</Link>,
        key:'lemonRead',
        icon:<HomeOutlined />
    },
    {
        label:"介绍",
        key:'introduce',
        icon:<MenuOutlined />,
        children:[
            {
                label:<Link to={"/introduce"}>opt1</Link>,
                key:'opt1'
            },
            {
                label:<Link to={"/introduce"}>opt1</Link>,
                key:'opt2'
            },
            {
                label:<Link to={"/introduce"}>opt1</Link>,
                key:'opt3'
            }
        ]
    },
    {
        label:'下载',
        key:'downLoad',
        icon:<DownloadOutlined />
    },
    {
        label:'登录',
        key:'login',
        icon:<LoginOutlined />
    },
    {
        label:<a href='https://www.baidu.com'>GitHub</a>,
        key:'gotoGit',
        icon:<img src={githublogo}></img>
    },
]
const Navigator : React.FC<Props> = ({naviMode}) =>{
    const [selectedKeys, setselectedKeys] = useState('lemonRead');
    const onClick:MenuProps['onClick'] = (e)=>{
        setselectedKeys(e.key)
    }
    return(<Menu defaultOpenKeys={['2']} style={{minWidth:"45vw"}} theme='dark' defaultSelectedKeys={['4']} selectedKeys={[selectedKeys]} onClick={onClick} mode={naviMode} items={items}></Menu>)
}

export default Navigator