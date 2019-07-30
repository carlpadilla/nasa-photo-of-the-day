import React from 'react';

export default function PhotoCard({ limit }) {
  return (
    <div className='photo'>
      <div>
        <img
          src='https://apod.nasa.gov/apod/image/1907/ngc3576_campbell_960.jpg'
          alt='NASA Photo of the day'
        />
      </div>
    </div>
  );
}
