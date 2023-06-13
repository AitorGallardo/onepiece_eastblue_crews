import { useDispatch, useSelector } from 'react-redux';
import './App.css';
// import { useFetch } from './hooks/useFetch';
import { CardGrid } from './components/card_grid/CardGrid';
import {
  getAllCrews,
  setDisplayedMembers,
} from './store/slices/onepiece';
import { useEffect, useState } from 'react';
import { SearchBar } from './components/search_bar/SearchBar';
import {
  filterMembers
} from './helpers/filterMembers';
import { RangeBar } from './components/range_bar/RangeBar';

// const API_ENDPIONT = 'http://localhost:3000/api/crews/';

function App() {
  const dispatch = useDispatch();
  const { isLoading, crews, members, displayedMembers } =
    useSelector((state) => state.onepiece);
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
    dispatch(setDisplayedMembers(filteredMembers));
  }, [filter]);

  const handleOnChangeValue = ({ name, value }) => {
    setFilter((filter) => ({ ...filter, [name]: value }));
  };


  return (
    <div className='app__container'>
      <section className='app__filter-section'>
        <div className='app__filter-section-left'></div>
        <SearchBar handleOnChangeValue={handleOnChangeValue} />
        <RangeBar handleOnChangeValue={handleOnChangeValue} />
      </section>

      {displayedMembers && <CardGrid cards={displayedMembers} />}
    </div>
  );
}

export default App;
