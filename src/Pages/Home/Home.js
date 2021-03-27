import HeroHome from '../../Components/HeroHome/HeroHome';
import Contact from './Sections/Contact/Contact';
import { useContext, useEffect } from 'react';
import About from './Sections/About/About';
import { Context } from '../../Context';


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
