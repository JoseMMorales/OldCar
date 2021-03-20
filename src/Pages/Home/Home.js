import HeroHome from '../../Components/HeroHome/HeroHome';
import Contact from '../../Components/Contact/Contact';
import About from '../../Components/About/About';

import { Context } from '../../Context';
import { useContext, useEffect } from 'react';

const Home = () => {
  const { getUserData } = useContext(Context);
  const isAuthenticated =  localStorage.isAuthenticated;

  useEffect(() => {
    isAuthenticated && getUserData();
  }, [])

	return (
		<div id='home'>
			<HeroHome />
      <About />
      <Contact />
		</div>
	)
}

export default Home;
