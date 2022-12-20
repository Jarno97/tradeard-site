import React from 'react';
import { Triangle } from 'react-loader-spinner';
import './Loader.css';

function loader() {
  return (
    <div className="loader-page">
        <Triangle 
        height="100"
        width="100"
        color="#ff2a2a"
        />
    </div>
  )
}

export default loader