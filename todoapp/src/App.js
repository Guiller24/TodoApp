import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';
import GetStarted from './pages/GetStarted';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import SignUp from './pages/SignUp';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

function App() {
  const [isAuth, setIsAuth] = useState('');
  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token){
      const decodedToken = jwtDecode(token);
      const isExpired = decodedToken.exp * 1000 < Date.now();
      if(!isExpired){
        setIsAuth(true);
      }
    };
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted isAuth={isAuth}/>} />
        <Route path="/login" element={<Login isAuth={isAuth} setIsAuth={setIsAuth}/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/main' element={<MainPage isAuth={isAuth}/>} />
      </Routes>
    </Router>
  );
}

export default App;
