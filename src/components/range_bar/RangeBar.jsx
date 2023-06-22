import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './RangeBar.css';

export const RangeBar = ({ isOnSidebar = false, handleOnChangeValue }) => {
  const [value, setValue] = useState(50);
  const [isEnabled, setIsEnabled] = useState(false);

  const handleOnChange = ({ target }) => {
    const name = target.name;
    let value = target.value;

    if (name === 'isPowerEnabled') {
      value = !(value === 'true');
      setIsEnabled(value);
    } else {
      setValue(value);
    }

    handleOnChangeValue({ name, value });
  };

  const tagOffset = 10;
  const tagPosition = {
    left: `${value - tagOffset}%`,
  };

  return (
    <div className={`rangeBar__container ${isOnSidebar ? 'onSidebar' : ''}`}>
      <div className='radioButton__container'>
        <input
          className='rangeBar-input_radio'
          type='radio'
          id='radioButton'
          name='isPowerEnabled'
          checked={isEnabled}
          value={isEnabled}
          onClick={handleOnChange}
          readOnly
        />
        <label htmlFor='radioButton'>Avg.Power</label>
      </div>
      <div className='rangeSlide__container'>
        <input
          id='rangeSlide'
          className='rangeBar-input_range'
          name='power'
          type='range'
          min='0'
          max='100'
          value={value}
          step='5'
          onChange={handleOnChange}
          disabled={!isEnabled}
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
