import React from 'react';
import Button from './components/Button';

function App() {
  function handleClick() {
    console.log('Button clicked');
  }

  return (
    <div>
      <Button onClick={handleClick} text="Click me" />
    </div>
  );
}

export default App;
