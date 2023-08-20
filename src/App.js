import './App.css';
import React from 'react';
import {useEffect, useState} from 'react';
import ListOfItems from './ListOfItems';

function App() {
  const [array, setArray] = useState([2,4,6,7,3,1,9,8,5]);

  return (
    <div className="App">
      <ListOfItems array={array} />
    </div>
  );
}

export default App;
