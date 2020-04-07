import React from 'react';
import HeaderComponent from './header/HeaderComponent';
import ToDoContentComponent from './todos/ToDoContentComponent';


function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <ToDoContentComponent/>
    </div>
  );
}

export default App;
