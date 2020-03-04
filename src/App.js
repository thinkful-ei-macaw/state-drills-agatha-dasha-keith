import React from 'react';
import Hello from './HelloWorld/HelloWorld';
import Bomb from './Bomb/Bomb';

function App() {
  return (
    <main className='App'>
      <div className='Hello'>
        <Hello />
      </div>
      <div className='Bomb'>
        <Bomb />
      </div>
      <div className='RouletteGun'>
        {/*<RouletteGun />*/}
      </div>
    </main>
  );
}

export default App;