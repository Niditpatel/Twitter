import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignupIndex from './components/SignUp/Index';
import LoginIndex from './components/Login/Index';
import Explore from './components/Explore/Explore';
import Foryou from './components/Explore/Tabs/Foryou';
import Tranding from './components/Explore/Tabs/Tranding';
import News from './components/Explore/Tabs/News';
import Sports from './components/Explore/Tabs/Sports';
import Entertainmnet from './components/Explore/Tabs/Entertainment';
import LoginUserHomepage from './components/LoginUser/HomepageforLoginUser';
import NotLoginUser from './components/NotLoginUser/Homepage';
const root = ReactDOM.createRoot(document.getElementById('root'));

export default function Guard({ children }) {
  if (localStorage.getItem('user')) {
    return children;
  } else {
    return <Navigate to='/public/i/flow/login'></Navigate>
  }
}
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/public' element={<NotLoginUser />}>
          <Route path='i/flow/signup' element={<SignupIndex />}></Route>
          <Route path='i/flow/login' element={<LoginIndex />}></Route>
          <Route path='explore' element={<Explore />}>
            <Route path='tabs/foryou' element={<Foryou />}></Route>
            <Route path='tabs/tranding' element={<Tranding />}></Route>
            <Route path='tabs/news' element={<News />}></Route>
            <Route path='tabs/sports' element={<Sports />}></Route>
            <Route path='tabs/entertainment' element={<Entertainmnet />}></Route>
          </Route>
        </Route>
        <Route path='/home' element={<LoginUserHomepage />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
