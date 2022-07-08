import { Input , message } from 'antd';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const {Search} = Input

const SearchNavi: React.FC = () =>{
    let navi = useNavigate()
    let gotoSearchPage = (e:any)=> {
        if(e != ''){
            message.success('This is a success message');
            navi("/SearchPage?bookName"+e)
        }else{
            message.error ('请输入您要搜索的书');
        }
    }
    return(    
        <Search placeholder="input search text"  onSearch={gotoSearchPage} style={{ width: "20vw" }} />
    );
} 

export default SearchNavi;