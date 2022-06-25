import React from 'react';
import {Layout} from 'antd';
import { Route, Routes } from 'react-router-dom';
import Navigator from './components/navigator/Navigator';
import SearchNavi from './components/searchNavi/SearchNavi';
import SiderNavi from './components/siderNavi/SiderNavi';
import Logo from './components/logo/Logo';
import Person from './view/person/Person';
import './App.less';
import Home from './view/Home';
import Introduce from './view/introduce/Introduce';

const { Header, Content, Footer } = Layout;
function App() {
  return (
    <div className="App">
      <Layout  className='home'>
            <Header className='headerHome'>
                <Logo></Logo>
                <SearchNavi></SearchNavi>
                <Navigator naviMode='horizontal'></Navigator>
            </Header>
              <Content >
                <SiderNavi></SiderNavi>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/person' element={<Person></Person>}></Route>
                    <Route path='/introduce' element={<Introduce></Introduce>}></Route>
                </Routes>
              </Content>
                <Footer>
                    啊可见的未来就
                </Footer>
        </Layout>
    </div>
  );
}

export default App;
