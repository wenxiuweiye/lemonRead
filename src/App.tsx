import React, {  useEffect, useState } from 'react';
import {Layout , Divider , Space} from 'antd';
import { WechatFilled , QqCircleFilled} from '@ant-design/icons';
import { Route, Routes } from 'react-router-dom';
import Navigator from './components/navigator/Navigator';
import SearchNavi from './components/searchNavi/SearchNavi';
import Logo from './components/logo/Logo';

import './App.less';
import Home from './view/home/Home';
import Introduce from './view/introduce/Introduce';
import Search from './view/search/Search';
import Friend from './view/friend/Friend';
import BookShelf from './view/bookShelf/BookShelf';

const { Header, Content, Footer } = Layout;
function App() {
  const [oldScrollValue , setoldScrollValue] = useState(0)
  useEffect(()=>{
   
  })
  return (
    <div className="App">
      <Layout className='home' >
            <Header className='headerApp' >
                <Logo></Logo>
                <SearchNavi></SearchNavi>
                <Navigator naviMode='horizontal'></Navigator>
            </Header>

              <Content >
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/search' element={<Search></Search>}></Route>
                    <Route path='/introduce' element={<Introduce></Introduce>}></Route>
                    <Route path='/friend' element={<Friend></Friend>}></Route>
                    <Route path='/bookShelf' element={<BookShelf></BookShelf>}></Route>
                </Routes>
              </Content>

                <Footer className='footerApp'>
                  <Divider></Divider>
                      <div style={{margin:"0.5%"}}>
                      <Space>
                        <span>互联网ICP备案:</span>
                        <span>蜀ICP备2021031219号-1</span>
                      </Space>
                      </div>
                      <div style={{margin:"0.5%"}}>
                      <Space>
                        <span>网上有害信息举报专区:</span>
                        <span><a href='href="https://www.12377.cn/'>中国互联网违法和不良信息举报中心</a></span>
                      </Space>
                      </div>
                      <div style={{margin:"0.5%"}}>
                      <Space>
                        <span>联系方式:</span>
                        <a ><WechatFilled /></a>
                        <QqCircleFilled /> 
                      </Space>
                      </div>
                </Footer>
        </Layout>
    </div>
  );
}

export default App;
