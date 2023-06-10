import { useDispatch, useSelector } from 'react-redux';
import './App.css';
// import { useFetch } from './hooks/useFetch';
import { CardGrid } from './components/card_grid/CardGrid';
import { getAllCrews } from './store/slices/thunks';
import { useEffect } from 'react';

// const API_ENDPIONT = 'http://localhost:3000/api/crews/';

function App() {
  // const { loading, data, error } = useFetch(API_ENDPIONT);
  const { isLoading, members, crews } = useSelector((state) => state.onepiece);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCrews());
  }, []);

  let cards;
  function extractMembers(crews) {
    return crews.reduce((acc, current) => {
      if (current.members && Array.isArray(current.members)) {
        acc = [...acc, ...current.members];
      }
      return acc;
    }, []);
  }
  if (data) {
    const { east_blue_pirate_crews } = data;
    cards = extractMembers(east_blue_pirate_crews);
  }
  return <>{data && <CardGrid cards={cards} />}</>;
}

export default App;
