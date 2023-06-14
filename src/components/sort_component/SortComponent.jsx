import { useState } from 'react';

export const SortComponent = ({ handleOnChangeValue }) => {
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
    <>
      <div>
        <label htmlFor='sortByPower'>By name:</label>
        <select
          id='sortByPower'
          name='sortByName'
          value={selectedSortByName}
          onChange={handleOptionChange}
        >
          <option value=''>-- Select an option --</option>
          <option value='ascendent'>Ascendent</option>
          <option value='descendent'>Descendent</option>
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
    </>
  );
};
