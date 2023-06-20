import { useDispatch, useSelector } from 'react-redux';
import './App.css';
// import { useFetch } from './hooks/useFetch';
import { CardGrid } from './components/card_grid/CardGrid';
import { getAllCrews, setDisplayedMembers } from './store/slices/onepiece';
import { useEffect, useRef, useState } from 'react';
import { SearchBar } from './components/search_bar/SearchBar';
import { filterMembers, sortMembers } from './helpers/filterMembers';
import { RangeBar } from './components/range_bar/RangeBar';
import { SortComponent } from './components/sort_component/SortComponent';
import { Sidebar } from './components/sidebar/Sidebar';
import { SidebarIcon } from './components/sidebarIcon/SidebarIcon';

// const API_ENDPIONT = 'http://localhost:3000/api/crews/';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);
  const sidebarIconRef = useRef(null);
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

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleOnChangeValue = ({ name, value }) => {
    setFilter((filter) => ({ ...filter, [name]: value }));
  };

  const handleShowSidebar = (value) => {
    setShowSidebar(value);
  };

  const handleOutsideClick = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      !sidebarIconRef.current.contains(event.target)
    ) {
      setShowSidebar(false);
    }
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
          <SidebarIcon handleShowSidebar={handleShowSidebar} ref={sidebarIconRef}/>
        </div>
      </div>
      <Sidebar
        isOpened={showSidebar}
        handleShowSidebar={handleShowSidebar}
        ref={sidebarRef}
      >
        <SortComponent
          isOnSidebar={true}
          handleOnChangeValue={handleOnChangeValue}
        />

        <RangeBar
          isOnSidebar={true}
          handleOnChangeValue={handleOnChangeValue}
        />
      </Sidebar>

      {displayedMembers && <CardGrid cards={displayedMembers} />}
    </div>
  );
}

export default App;
