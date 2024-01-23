import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import "./_index.scss";
import GlobalStyle from './utils/styles/GlobalStyle';
import User from './Pages/User';

//REDUX
import { Provider } from 'react-redux';
import store from './utils/styles/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <Router>
      <GlobalStyle/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
  </Provider>
)