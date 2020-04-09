import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { SearchContainer, SearchInput, Button } from './styles';

const SearchForm = ({ small }) => {
  return (
    <SearchContainer small={small}>
      <SearchInput placeholder="Search for a player..." />
      <Button>
        <IoIosArrowRoundForward />
      </Button>
    </SearchContainer>
  );
};

export default SearchForm;
