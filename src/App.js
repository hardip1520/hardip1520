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
import Agenthouse from './Pages/AgentHouses/AgentHouse'
import Userarea from './Pages/Userarea/Userarea';

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
    <Route path='agentproperty' element={<Agenthouse/>}/>
    <Route path='userarea' element={<Userarea/>}/>
    
  </Routes>

  <div className='footer-container'>
    <Footer/>
  </div>
    </>
  );
}

export default App;
