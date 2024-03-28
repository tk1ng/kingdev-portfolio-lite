import React from 'react';

import './HeroWrapper.css';

const HeroWrapper = ({children}) => {
  return (
    <div className='hero-wrapper'>
      {children}
    </div>
  )
}

export default HeroWrapper;
