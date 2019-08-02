import React from 'react';
import BodyClassName from 'react-body-classname';
import './App.css';
import Header from './components/Header/Header.component';
import PhotoCard from './components/PhotoCard/PhotoCard.component';
import PhotoDetails from './components/PhotoDetails/PhotoDetails.component';

function App() {
  return (
    <BodyClassName className='body-bg'>
      <div className='App'>
        <Header />
        <PhotoCard />
        <PhotoDetails />
      </div>
    </BodyClassName>
  );
}

// const styleLink = document.createElement('link');
// styleLink.rel = 'stylesheet';
// styleLink.href =
//   'https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css';
// document.head.prepend(styleLink);
export default App;
