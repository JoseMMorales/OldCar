import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PublishPage from './Pages/PublishPage/PublishPage';
import DetailsPage from './Pages/DetailsPage/DetailsPage';
import BackToTop from './Components/BackToTop/BackToTop';
import SearchPage from './Pages/SearchPage/SearchPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import EditPage from './Pages/EditPage/EditPage';
import UserPage from './Pages/UserPage/UserPage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { useLocation } from "react-router-dom";
import { ContextProvider } from './Context';
import Home from './Pages/Home/Home';
import { useEffect } from 'react';
import './scss/styles.scss';

//Each time a page is open scroll to top
const ScrollToTopOnMount = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTopOnMount />
        <ContextProvider>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Redirect to= '/Pages/Home/Home'/>
            </Route>
            <Route exact path='/Pages/Home/Home' component={Home} />
            <Route path='/Pages/SearchPage/SearchPage' component={SearchPage} />
            <Route path='/Pages/LoginPage/LoginPage' component={LoginPage} />
            <Route path='/Pages/EditPage/EditPage' component={EditPage} />
            <Route path='/Pages/PublishPage/PublishPage' component={PublishPage} />
            <Route path='/Pages/DetailsPage/DetailsPage/:id' component={DetailsPage} />
            <Route path='/Pages/UserPage/UserPage' component={UserPage} />
          </Switch>
        </ContextProvider>
        <BackToTop />
        <Footer />
      </Router>
    </>
  );
}

export default App;
