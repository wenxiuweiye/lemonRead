import React from 'react';
import {Layout} from 'antd';
import logo from '../../assets/images/logo/logo.png'
const Logo:React.FC = ()=>{
    return(
        <div className='logoHome'>
            <a href='/'>
                <img src={logo}></img>
                柠檬读书
            </a>
        </div>
    )
}

export default Logo