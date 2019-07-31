import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './photodetails.styles.scss';

const PhotoDetails = () => {
  const [photoDetails, setPhotoDetails] = useState([]);
  //date
  const [photoDate, setPhotoDate] = useState([]);
  //title
  const [photoTitle, setPhotoTitle] = useState([]);
  //copyright
  const [photoCopyright, setPhotoCopyright] = useState([]);

  useEffect(() => {
    Axios.get(
      'https://api.nasa.gov/planetary/apod?api_key=3IAG373NoqLdseheSZgTjg0fCGE8IYiGUt1x1PWH'
    )
      .then(res => {
        // console.log('RESPONSE:', res.data);
        setPhotoTitle(res.data.title);
        setPhotoDate(res.data.date);
        setPhotoDetails(res.data.explanation);
        setPhotoCopyright(res.data.copyright);
      })
      .catch(err => console.log('ERROR:', err));
  }, []);

  return (
    <div className='photo-details'>
      <h1 className='title'>{photoTitle}</h1>
      <h3 className='photo-date'>NASA pic for {photoDate}</h3>
      <p>{photoDetails}</p>
      <h4 className='copyright'>Copyright: {photoCopyright}</h4>
    </div>
  );
};

export default PhotoDetails;
