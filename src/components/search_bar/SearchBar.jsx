import { useState } from "react"
// import { ReactComponent as Icon } from '../../assets/search-icon.svg';

export const SearchBar = ({handleOnChangeValue}) => {

    const [value, setValue] = useState('')

    const handleOnChange = ({target}) =>{
        const val = target.value;
        setValue(val)
        handleOnChangeValue(val)
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
