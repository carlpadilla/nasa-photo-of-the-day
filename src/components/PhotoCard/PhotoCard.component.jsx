import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './photocard.styles.scss';

export default function PhotoCard() {
  //url
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    Axios.get(
      'https://api.nasa.gov/planetary/apod?api_key=3IAG373NoqLdseheSZgTjg0fCGE8IYiGUt1x1PWH'
    )
      .then(res => {
        // console.log('RESPONSE:', res.data.url);
        setPhoto(res.data.url);
      })
      .catch(err => console.log('ERROR:', err));
  }, []);

  return (
    <div className='nasaPhoto'>
      <Image
        className='nasaPhotos'
        src={photo}
        as='a'
        size='large'
        href='http://google.com'
        target='_blank'
      />
    </div>
  );
}

// <div className='nasaPhoto'>
//     <img src={photo} alt='space' />
//   </div>
