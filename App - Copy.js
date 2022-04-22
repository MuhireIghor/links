import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app bg-white">
  
      <Header/>
      <div className="app__body bg-white">
        <Sidebar />
        <Feed />
      </div>

    </div>
   );
}

export default App;
