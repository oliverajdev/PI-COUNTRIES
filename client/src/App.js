import { Routes, Route } from 'react-router-dom';
import './App.css';
import ToHome from './pages/tohome';
import Home from './pages/home'
import Nav from './components/navbar';
import  DetailCountry  from './pages/detailcountry';

function App() {
  return (
    <div className="App">

    

      <Nav/>
      <Routes>
      
        <Route exact path='/' element={<ToHome/>}/>
        
        <Route exact path='/home' element={<Home/>}/>

        <Route exact path='/detail/:code' element={<DetailCountry/>}/>
        
      </Routes>      
      
    </div>
  );
}

export default App;
