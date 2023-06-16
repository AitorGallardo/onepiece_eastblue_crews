import { useDispatch, useSelector } from 'react-redux';
import './App.css';
// import { useFetch } from './hooks/useFetch';
import { CardGrid } from './components/card_grid/CardGrid';
import { getAllCrews, setDisplayedMembers } from './store/slices/onepiece';
import { useEffect, useState } from 'react';
import { SearchBar } from './components/search_bar/SearchBar';
import { filterMembers, sortMembers } from './helpers/filterMembers';
import { RangeBar } from './components/range_bar/RangeBar';
import { SortComponent } from './components/sort_component/SortComponent';

// const API_ENDPIONT = 'http://localhost:3000/api/crews/';

function App() {
  const dispatch = useDispatch();
  const { isLoading, crews, members, displayedMembers } = useSelector(
    (state) => state.onepiece
  );
  const [filter, setFilter] = useState({
    word: null,
    power: 50,
    isPowerDisabled: true,
  });

  useEffect(() => {
    dispatch(getAllCrews());
  }, []);

  useEffect(() => {
    const filteredMembers = filterMembers(filter, members);
    const sortedMembers = sortMembers(filter, filteredMembers);
    dispatch(setDisplayedMembers(sortedMembers));
  }, [filter]);

  const handleOnChangeValue = ({ name, value }) => {
    setFilter((filter) => ({ ...filter, [name]: value }));
  };

  return (
    <div className='app__container'>
      <div className='app__filter-section'>
        <div className='app__filter-section__left'>
          <SortComponent handleOnChangeValue={handleOnChangeValue} />
        </div>
        <SearchBar handleOnChangeValue={handleOnChangeValue} />
        <div className='app__filter-section__right'>
          <RangeBar handleOnChangeValue={handleOnChangeValue} />
        </div>
      </div>

      {displayedMembers && <CardGrid cards={displayedMembers} />}
    </div>
  );
}

export default App;
