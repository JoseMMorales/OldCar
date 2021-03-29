import { HeroHome, About, Contact } from './Sections';
import { useContext, useEffect } from 'react';
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
