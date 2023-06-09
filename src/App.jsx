import { useState } from 'react';
import './App.css';
import { useFetch } from './hooks/useFetch';

const API_ENDPIONT = 'http://localhost:3000/api/crews/';

function App() {
  const [count, setCount] = useState(0);
  const { loading, data, error } = useFetch(API_ENDPIONT);
  console.log('DATA',data);
  return <>
  </>;
}

export default App;
