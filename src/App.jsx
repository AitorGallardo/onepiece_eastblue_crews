import { useState } from 'react';
import './App.css';
import { useFetch } from './hooks/useFetch';
import { Card } from './components/card/Card';
import { CardGrid } from './components/card_grid/CardGrid';

const API_ENDPIONT = 'http://localhost:3000/api/crews/';

function App() {
  const [count, setCount] = useState(0);
  const { loading, data, error } = useFetch(API_ENDPIONT);
  console.log('DATA', data);

  let cards;
function extractMembers(crews){
   return crews.reduce((acc,current)=>{
    if (current.members && Array.isArray(current.members)) {
      acc = [...acc,...current.members]
    }
    return acc;
  },[])
}
  if (data) {
    const {east_blue_pirate_crews} = data;
    cards = extractMembers(east_blue_pirate_crews)
  }
  return <>{data && <CardGrid cards={cards} />}</>;
}

export default App;
