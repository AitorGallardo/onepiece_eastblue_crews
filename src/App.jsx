import { useDispatch, useSelector } from 'react-redux';
import './App.css';
// import { useFetch } from './hooks/useFetch';
import { CardGrid } from './components/card_grid/CardGrid';
import { getAllCrews, setDisplayedMembers } from './store/slices/onepiece';
import { useEffect, useState } from 'react';
import { SearchBar } from './components/search_bar/SearchBar';
import { filterMembers } from './helpers/filterMembers';

// const API_ENDPIONT = 'http://localhost:3000/api/crews/';

function App() {
  const dispatch = useDispatch();
  const { isLoading, crews, members,displayedMembers } = useSelector((state) => state.onepiece);
  console.log('componente',members)
  useEffect(() => {
    dispatch(getAllCrews());
    console.log('USEEFFECT', members);
  }, []);

  const handleOnChangeValue = (value)=>{
    const filteredMemberes = filterMembers(value,members)
    dispatch(setDisplayedMembers(filteredMemberes))
  }

  return (
    <div className='app__container'>
      <SearchBar handleOnChangeValue={handleOnChangeValue}/>
      {displayedMembers && <CardGrid cards={displayedMembers} />}
    </div>
  );
}

export default App;
