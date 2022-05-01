import { Routes, Route } from 'react-router-dom';
import './App.css';
import ToHome from './pages/tohome';
import Home from './pages/home'
import Nav from './components/navbar';

function App() {
  return (
    <div className="App">

    

      <Nav/>
      <Routes>
      
        <Route exact path='/' element={<ToHome/>}/>
        
        <Route exact path='/home' element={<Home/>}/>
        
      </Routes>      
      
    </div>
  );
}

export default App;
