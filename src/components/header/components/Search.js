import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { SearchContainer, Input, Button } from './Search.styles';

const Search = () => {
  return (
    <SearchContainer>
      <Input placeholder="Search for a player..." />
      <Button>
        <IoIosArrowRoundForward />
      </Button>
    </SearchContainer>
  );
};
export default Search;
