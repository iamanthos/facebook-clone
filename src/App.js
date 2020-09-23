import React from 'react';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import './App.css';
import Feed from './Feed.js';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider.js';

function App() {
  const [{ user }, dispatch] = useStateValue();
  
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
      <Header/>
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      </>
      )}
    </div>
  );
}

export default App;
