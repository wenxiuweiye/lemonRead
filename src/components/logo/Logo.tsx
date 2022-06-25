import React from 'react';
import {Layout} from 'antd';
import logo from '../../assets/images/logo/logo.png'
const Logo:React.FC = ()=>{
    return(
        <div className='logoHome'>
            <img src={logo}></img>
            <text>柠檬读书</text>
        </div>
    )
}

export default Logo