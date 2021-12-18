
import './App.css';
import Home from './Pages/HomePage/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

import LoginPage from './Pages/Login/LoginPage/LoginPage';

import Navbar from './Pages/Share/Navbar/Navbar';
import Footer from './Pages/Share/Footer/Footer';

import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute'

import Services from './Pages/HomePage/Services/Services';
import Gallery from './Pages/HomePage/Gallery/Gallery';
import About from './Pages/About/About';
import BookModal from './Pages/HomePage/BookModal/BookModal';
import Dashboardd from './Pages/Dashboard/Dashboardd/Dashboardd';


function App() {
  return (
    <div className="App" >
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Navbar></Navbar>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/home">
              <Navbar></Navbar>
              <Home></Home>
              <Footer></Footer>
            </Route>

            <Route path="/service">
              <Navbar></Navbar>
              <Services></Services>
              <Footer></Footer>
            </Route>
            <Route path="/gallery">
              <Navbar></Navbar>
              <Gallery></Gallery>
              <Footer></Footer>
            </Route>
            <Route path="/about">
              <Navbar></Navbar>
              <About></About>
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/booking/:postId">
              <Navbar></Navbar>
              <BookModal></BookModal>
              <Footer></Footer>
            </PrivateRoute>


            <Route path="/login">
              <Navbar></Navbar>
              <LoginPage></LoginPage>
              <Footer></Footer>

            </Route>
            <Route path="/dashboard">

              <Dashboardd></Dashboardd>


            </Route>

            <Route path="/register">
              <Navbar></Navbar>
              <Register></Register>
              <Footer></Footer>

            </Route>
          </Switch>

        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
