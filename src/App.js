import React from 'react';
import './App.css';
import Header from './components/Header/Header.component';
import PhotoCard from './components/PhotoCard/PhotoCard.component';
import PhotoDetails from './components/PhotoDetails/PhotoDetails.component';

function App() {
  return (
    <div className='App'>
      <Header />
      <PhotoCard />
      <PhotoDetails />
    </div>
  );
}

export default App;
