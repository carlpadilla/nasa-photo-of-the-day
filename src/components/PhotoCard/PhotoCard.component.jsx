import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export default function PhotoCard({ limit }) {
  const [photos, setPhoto] = useState([]);

  useEffect(() => {
    Axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then(
      res => {
        console.log('RESPONSE:', res.data.url);
      }
    );
  });

  return (
    <div className='photo'>
      {photos.map(photoUrl => {
        return <img url={photos.data.url} />;
      })}
    </div>
  );
}

// const images = [
//     'https://apod.nasa.gov/apod/image/1907/ngc3576_campbell_960.jpg'
//   ];

// <div>
// <img
//   src='https://apod.nasa.gov/apod/image/1907/ngc3576_campbell_960.jpg'
//   alt='NASA Photo of the day'
// />
// </div>
