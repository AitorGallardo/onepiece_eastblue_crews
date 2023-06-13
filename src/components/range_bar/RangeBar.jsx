import { useState } from 'react';
import PropTypes from 'prop-types';

import './RangeBar.css';

export const RangeBar = ({ handleOnChangeValue }) => {
  const [value, setValue] = useState(50);
  const [disabled, setDisabled] = useState(true);

  const handleOnChange = ({ target }) => {
    const val = target.value;
    setValue(val);
    handleOnChangeValue({name:'power', value: val})

  };
  const handleOnClick = () => {
    setDisabled((value) => !value);
    handleOnChangeValue({name:'isPowerDisabled', value:!value})

  };
  const tagOffset = 10;
  const tagPosition = {
    left: `${value - tagOffset}%`,
  };

  return (
    <div className='rangeBar__container'>
      <div className='radioButton__container'>
        <input
          className='rangeBar-input_radio'
          type='radio'
          id='radioButton'
          name='radioGroup'
          checked={!disabled}
          onChange={handleOnClick}
        />
        <label htmlFor='radioButton'>Avg.Power</label>
      </div>
      <div className='rangeSlide__container'>
        <input
          id='rangeSlide'
          className='rangeBar-input_range'
          type='range'
          min='0'
          max='100'
          value={value}
          step='5'
          onChange={handleOnChange}
          disabled={disabled}
        />
        <span className='slider-tag' style={tagPosition}>
          {value}
        </span>
        <span className='slider-start'>0</span>
        <span className='slider-end'>100</span>
      </div>
    </div>
  );
};
RangeBar.propTypes = {
  handleOnChangeValue: PropTypes.func,
};
