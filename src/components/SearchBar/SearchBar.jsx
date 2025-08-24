import React from 'react';
import { Flex, Input } from 'antd';
const SearchBar = () => (
    <Flex vertical gap={12}>
        <Input.Search placeholder="Search" variant="filled" />
    </Flex>
);
export default SearchBar;