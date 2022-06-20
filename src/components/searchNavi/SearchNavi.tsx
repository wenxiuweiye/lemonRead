
import { Input } from 'antd';
import React from 'react';
const {Search} = Input
const onSearch = (value: string) => console.log(value);
const SearchNavi: React.FC = () => (
    <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />

);

export default SearchNavi;