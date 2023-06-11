import { useDispatch, useSelector } from 'react-redux';
import './App.css';
// import { useFetch } from './hooks/useFetch';
import { CardGrid } from './components/card_grid/CardGrid';
import { getAllCrews } from './store/slices/onepiece';
import { useEffect } from 'react';

// const API_ENDPIONT = 'http://localhost:3000/api/crews/';

function App() {
  const dispatch = useDispatch();
  const { isLoading, crews, members } = useSelector((state) => state.onepiece);

  useEffect(() => {
    dispatch(getAllCrews());
    console.log('mmmmmmemb',members);
  }, []);


console.log('se printa con members',members);

  return <>
  {members && <CardGrid cards={members} />}
  </>;
}

export default App;
