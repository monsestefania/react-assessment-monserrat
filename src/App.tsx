import React, {useEffect, useState} from 'react';
import { useAge } from './hooks';
import ButtonReset from './components/ButtonReset';

function App() {
  const {counter, lastUpdate, reset} = useAge();

  return (
    <div className="App">
      <p>
        time passed: {counter}
        <br></br>
        Last Updated: {lastUpdate}
      </p>
      <ButtonReset
      clicked={reset}/>
    </div>
  );
}

export default App;
