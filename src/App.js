import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import PublishPage from './Pages/PublishPage/PublishPage';
import DetailsPage from './Pages/DetailsPage/DetailsPage';
import BackToTop from './Components/BackToTop/BackToTop';
import SearchPage from './Pages/SearchPage/SearchPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import EditPage from './Pages/EditPage/EditPage';
import UserPage from './Pages/UserPage/UserPage';
import Admin from './Pages/AdminPage/AdminPage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { useLocation } from "react-router-dom";
import { ContextProvider } from './Context';
import Home from './Pages/Home/Home';
import { useEffect } from 'react';
import './scss/styles.scss';

//When rendering any component scroll to top
const ScrollToTopOnMount = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {

  const PrivateRoute = ({ component: Component, ...rest }) => {
  return  <Route {...rest} render = {(props) => (
            localStorage.isAuthenticated  ?
            (<Component {...props} />) :
            (<Redirect to= '/Pages/LoginPage/LoginPage' />)
            )}
          />
  };

  // const AdminRoute = (props) => {
  //   return (
  //       localStorage.getItem("admin") ?
  //       <AdminRoute {...props} /> :
  //       <Redirect to = {{
  //           pathname: "/Pages/LoginPage/LoginPage"
  //       }} />
  //   )
  // }

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
            <PrivateRoute path='/Pages/EditPage/EditPage' component={EditPage} />
            <Route path='/Pages/PublishPage/PublishPage' component={PublishPage} />
            <Route path='/Pages/DetailsPage/DetailsPage/:id' component={DetailsPage} />
            <PrivateRoute path='/Pages/UserPage/UserPage' component={UserPage} />
            <PrivateRoute path='/Pages/AdminPage/AdminPage' component={Admin} />
          </Switch>
        </ContextProvider>
        <BackToTop />
        <Footer />
      </Router>
    </>
  );
}

export default App;
