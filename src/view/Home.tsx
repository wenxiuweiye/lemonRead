import React from 'react';
import {Layout} from 'antd';
import Navigator from '../components/navigator/Navigator';
import SearchNavi from '../components/searchNavi/SearchNavi';
import '../assets/less/Home.less'
import logo from '../assets/images/logo/logo.png'
import SiderNavi from '../components/siderNavi/SiderNavi';
const { Header, Content, Footer } = Layout;

const Home:React.FC = () =>{
    return (
        <Layout  className='home'>
            <Header className='headerHome'>
                <div className='logoHome'>
                    <img src={logo}></img>
                    <text>柠檬读书</text>
                </div>
                <SearchNavi></SearchNavi>
                <Navigator naviMode='horizontal'></Navigator>
            </Header>
              <Content >
                <SiderNavi></SiderNavi>
                    5465
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    aaa
                    5465
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    aaa
                    5465
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    aaa
                    5465
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    aaa
                </Content>
                <Footer>
                    啊可见的未来就
                </Footer>
        </Layout>
    )
}
export default Home