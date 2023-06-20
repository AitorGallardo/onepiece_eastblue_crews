import { useState } from 'react';

import './SortComponent.css'

export const SortComponent = ({ isOnSidebar=false, handleOnChangeValue }) => {
  const [selectedSortByName, setSelectedSortByName] = useState('');
  const [selectedSortByPower, setSelectedSortByPower] = useState('');

  const handleOptionChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    const payload = {
      name,
      value,
    };
    name === 'sortByName' ? setSelectedSortByName(value) : setSelectedSortByPower(value);
    handleOnChangeValue(payload);
  };

  return (
    <div className={`sortComponent__container ${isOnSidebar?'onSidebar':''}`}>
      <div>
        <label htmlFor='sortByPower'>By name:</label>
        <select
          id='sortByPower'
          name='sortByName'
          value={selectedSortByName}
          onChange={handleOptionChange}
        >
          <option value=''>-- Select an option --</option>
          <option value='descendent'>From A to Z</option>
          <option value='ascendent'>From Z to A</option>
        </select>
      </div>
      <div>
        <label htmlFor='sortByPower'>By Power:</label>
        <select
          id='sortByPower'
          name='sortByPower'
          value={selectedSortByPower}
          onChange={handleOptionChange}
        >
          <option value=''>-- Select an option --</option>
          <option value='ascendent'>Lower first</option>
          <option value='descendent'>Higher first</option>
        </select>
      </div>
    </div>
  );
};
