import {
    TableOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    TeamOutlined
  } from '@ant-design/icons';
  import type { MenuProps } from 'antd';
  import { Button, Menu } from 'antd';
  import React, { useState} from 'react';
  const items: MenuProps['items'] = [
    {
      label:"书榜",
      key:'bookList',
      icon:<PieChartOutlined />
    },
    {
      label:"书架",
      key:'bookShelf',
      icon:<TableOutlined />
    },
    {
      label:"书友",
      key:'bookClub',
      icon:<TeamOutlined />
    }
  ];
  const SiderNavi: React.FC = () => {
    const [collapsed, setCollapsed] = useState(true);

    const [_time,_setTime] = useState(undefined)
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
    const onSelect:MenuProps["onSelect"] = (e)=>{
      console.log(e.key)
      let ele =  document.getElementsByClassName(e.key)
      ele[0].scrollIntoView()
    }
    return (
      <div style={{position:"fixed",top:"5", marginLeft:"1vw", display:'flex',flexDirection:'column', alignItems:'start', justifyContent:"center", width: 256, zIndex:"10"}}>
        <Button type="primary" onClick={toggleCollapsed} style={{marginLeft:"1vw",marginTop:'2vh', marginBottom: "1em", zIndex:10}}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          inlineCollapsed={collapsed}
          items={items}
          onSelect={onSelect}
        />
      </div>
    );
  };
  
  export default SiderNavi;