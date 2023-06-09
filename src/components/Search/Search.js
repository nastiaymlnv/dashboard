import React from "react";

import SearchIcon from "../../assets/search-icon.svg"

import {
    InputContainer,
    InputIcon,
    Input
} from "./Search.style";

const Search = () => {
    return (
        <InputContainer>
            <InputIcon src={SearchIcon} alt="search" />
            <Input
                id="search"
                type="text"
                placeholder="Search"
                // ref={}
                // onChange={}
                // onBlur={}
            />
        </InputContainer>
    )
}

export default Search;