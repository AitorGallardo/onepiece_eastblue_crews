import { useState } from 'react';
import searchIcon from '../../assets/search-icon.svg';
import PropTypes from 'prop-types';

import './SearchBar.css';

export const SearchBar = ({ handleOnChangeValue }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleOnChange = ({ target }) => {
    const value = target.value;
    setSearchValue(value);
    handleOnChangeValue({ name: 'word', value });
  };

  return (
    <div className='searchBar__container'>
      <div className='searchBar__input-container'>
        <input
          className='searchBar__input'
          type='text'
          placeholder='Search'
          value={searchValue}
          onChange={handleOnChange}
        />
        <button className='searchBar__button'>
          <img
            className='searchBar__search-icon'
            src={searchIcon}
            alt='Your SVG'
          />
        </button>
      </div>
      {/* <ul>
        <li>hola</li>
        <li>adios</li>
      </ul> */}
    </div>
  );
};

SearchBar.propTypes = {
  handleOnChangeValue: PropTypes.func,
};
