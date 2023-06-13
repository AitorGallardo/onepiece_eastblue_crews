import { useState } from "react"
// import { ReactComponent as Icon } from '../../assets/search-icon.svg';
import PropTypes from 'prop-types';

import './SearchBar.css'

export const SearchBar = ({handleOnChangeValue}) => {

    const [value, setValue] = useState('')

    const handleOnChange = ({target}) =>{
        const val = target.value;
        setValue(val)
        handleOnChangeValue({name:'word', value:val})
    }

  return (
    <div className="searchBar__container">
     <input type="text" value={value} onChange={handleOnChange}/>   
     <button className="icon-button">
      {/* <Icon className="icon" /> */}
    </button>
    </div>
  )
}

SearchBar.propTypes = {
  handleOnChangeValue: PropTypes.func,
};

