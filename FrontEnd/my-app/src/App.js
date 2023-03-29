import './App.css';
import LoginSignup from './components/login-signup/login-signup';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginSignup login='Login' />} />
        <Route path='/register' element={<LoginSignup />} />
      </Routes >
    </>
  );
}

export default App;
