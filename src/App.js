
import './styles/App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Registration from './components/Registeration'
import Register from './components/Register';
import Login from './components/Login';


import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
       
        <Route path="/" element={<Registration />}>
            <Route path="register" element={<Register />} ></Route>
            <Route path="login" element={<Login />} ></Route>
        </Route>
       
      </Routes>




      <Footer />
    </div>);
}








export default App;
