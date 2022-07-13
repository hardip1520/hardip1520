import './App.css';
import { Routes , Route} from 'react-router-dom';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import CustomerLogin from './Components/Form/CustomerLogin';
import Register from './Components/Form/Register'
import Subnav from './Components/Subnav';
import AgentLogin from './Components/Form/AgentLogin';
import Agent from './Pages/Agent'

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
    <Route path='user' element={<CustomerLogin/>}/>
    <Route path='agent' element={<AgentLogin/>}/>
    <Route path='addproperty' element={<Agent/>}/>
  </Routes>

  <div className='footer-container'>
    <Footer/>
  </div>
    </>
  );
}

export default App;
