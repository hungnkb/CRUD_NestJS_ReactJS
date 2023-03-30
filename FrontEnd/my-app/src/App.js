import './App.css';
import Login from './components/login-signup/login';
import { Route, Routes } from 'react-router-dom';
import { TableProduct } from './components/products/table';
import { CreateProduct } from './components/products/create';
import { EditProduct } from './components/products/edit';
import NavbarHeader from './components/headers/navbar/navbar';
import Signup from './components/login-signup/register';

function App() {
  return (
    <>
      <Routes>

      </Routes>
      <NavbarHeader />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/products' element={<TableProduct />}></Route>
        <Route path='/products/create' element={<CreateProduct />}></Route>
        <Route path='/products/edit/:id' element={<EditProduct />}></Route>
      </Routes >
    </>
  );
}

export default App;
