import { useState } from 'react';

import './RangeBar.css';

export const RangeBar = ({ handleOnChangeValue }) => {
  const [value, setValue] = useState(50);
  const [disabled, setDisabled] = useState(true);

  const handleOnChange = ({ target }) => {
    const val = target.value;
    setValue(val);
    handleOnChangeValue(val);
  };
  const handleOnClick = ({target}) => {
    setDisabled((value) => !value);
    // target.value = !target.value;
  };
  return (
    <div className='rangeBar__container'>
      <input
        className='rangeBar-input'
        type='range'
        min='0'
        max='100'
        value={value}
        step='1'
        onChange={handleOnChange}
        disabled={disabled}
      />
      <input
        type='radio'
        id='radioButton'
        name='radioGroup'
        checked={!disabled}
        onClick={handleOnClick}
      />
      <label htmlFor='radioButton'>Enabled</label>
    </div>
  );
};
