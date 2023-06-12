import { useDispatch, useSelector } from 'react-redux';
import './App.css';
// import { useFetch } from './hooks/useFetch';
import { CardGrid } from './components/card_grid/CardGrid';
import { getAllCrews, setDisplayedMembers } from './store/slices/onepiece';
import { useEffect, useState } from 'react';
import { SearchBar } from './components/search_bar/SearchBar';
import { filterMembersByWord,filterMembersByRange } from './helpers/filterMembers';
import { RangeBar } from './components/range_bar/RangeBar';

// const API_ENDPIONT = 'http://localhost:3000/api/crews/';

function App() {
  const dispatch = useDispatch();
  const { isLoading, crews, members, displayedMembers } = useSelector(
    (state) => state.onepiece
  );
  useEffect(() => {
    dispatch(getAllCrews());
  }, []);

  const handleOnChangeValue = (value) => {
    const filteredMembers = filterMembersByWord(value, displayedMembers);
    dispatch(setDisplayedMembers(filteredMembers));
  };
  const handleOnChangeRange = (value) => {
    const filteredMembers = filterMembersByRange(value, displayedMembers);
    dispatch(setDisplayedMembers(filteredMembers));
  };

  return (
    <div className='app__container'>
      <section className='app__filter-section'>
        <div className="app__filter-section-left"></div>
        <SearchBar handleOnChangeValue={handleOnChangeValue} />
        <RangeBar handleOnChangeRange={handleOnChangeRange}/>
      </section>

      {displayedMembers && <CardGrid cards={displayedMembers} />}
    </div>
  );
}

export default App;
