import React,{useState} from 'react';
import { DownloadOutlined,HomeOutlined,MenuOutlined } from '@ant-design/icons';
import type {MenuProps,} from 'antd';
import githublogo from '../../assets/images/logo/github-fill-white.png';
import {Menu} from 'antd';
//
interface Props{
    naviMode:MenuProps['mode']
}
const items:MenuProps['items'] = [
    {
        label:<a href='/'>柠檬读书</a>,
        key:'lemonRead',
        icon:<HomeOutlined />
    },
    {
        label:"介绍",
        key:'introduce',
        icon:<MenuOutlined />,
        children:[
            {
                label:'opt1',
                key:'opt1'
            },
            {
                label:'opt2',
                key:'opt2'
            },
            {
                label:'opt3',
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
    return(<Menu defaultOpenKeys={['2']} style={{minWidth:"35vw"}} theme='dark' defaultSelectedKeys={['4']} selectedKeys={[selectedKeys]} onClick={onClick} mode={naviMode} items={items}></Menu>)
}

export default Navigator