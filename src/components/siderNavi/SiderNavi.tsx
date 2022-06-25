import {
    AppstoreOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';
  import type { MenuProps } from 'antd';
  import { Button, Menu } from 'antd';
  import React, { useState } from 'react';
  
  const items: MenuProps['items'] = [
    {
      label:"opt1",
      key:'opt1',
      icon:<AppstoreOutlined></AppstoreOutlined>
    },
    {
      label:"opt2",
      key:'opt2',
      icon:<AppstoreOutlined></AppstoreOutlined>
    },
    {
      label:"opt3",
      key:'opt4',
      icon:<AppstoreOutlined></AppstoreOutlined>
    }
  ];
  
  const SiderNavi: React.FC = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [naviShow,setnaviShow] = useState({zIndex:"0"})
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
      if(!collapsed){
        setnaviShow({zIndex:"0"})
      }else{
        setnaviShow({zIndex:"10"})
      }
    };
  
    return (
      <div style={{position:"absolute", marginLeft:"1vw", display:'flex',flexDirection:'column', alignItems:'start', justifyContent:"center", width: 256 }}>
        <Button type="primary" onClick={toggleCollapsed} style={{marginLeft:"1vw",marginTop:'2vh', marginBottom: "1em", zIndex:10}}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          inlineCollapsed={collapsed}
          items={items}
          style={naviShow}
        />
      </div>
    );
  };
  
  export default SiderNavi;