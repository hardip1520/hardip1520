import './App.css';
import { Routes , Route} from 'react-router-dom';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Login from './Components/Form/Login'
import Register from './Components/Form/Register'
import Subnav from './Components/Subnav';

function App() {
  return (
    <>
    <div className="nav-container">
      <Subnav/>
      <Navbar/>
    </div>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='register' element={<Register/>}/>
    <Route path='user' element={<Login/>}/>
    <Route path='agent' element={<Login/>}/>
  </Routes>

  <div className='footer-container'>
    <Footer/>
  </div>
    </>
  );
}

export default App;
