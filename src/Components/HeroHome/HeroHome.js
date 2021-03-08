import Search from '../Search/Search';
import { useEffect } from 'react';

const HeroHome = () => {

  const pathName = window.location.pathname;

  return (
    <>
      <div
        className='hero'
        style={{backgroundImage: `url('/img/heroImg.jpg')`}} >
        <Search
          className='search-home'
          pathName={pathName}
        />
      </div>
    </>
  )
}

export default HeroHome;
