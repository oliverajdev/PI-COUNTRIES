import { Routes, Route } from 'react-router-dom';
import './App.css';
import ToHome from './pages/tohome';
import Home from './pages/home'
import Nav from './components/navbar';
import  DetailCountry  from './pages/detailcountry';
import  AddActivity from './pages/addactivity';
import  ActivitiesList  from './pages/activitieslist';
import { ActivityUpdate } from './pages/activityupdate';
import  Favorites  from './pages/favorites';


function App() {
  return (
    <div className="App">

    

      <Nav/>
      <Routes>
      
        <Route exact path='/' element={<ToHome/>}/>
        
        <Route exact path='/home' element={<Home/>}/>

        <Route exact path='/detail/:code' element={<DetailCountry/>}/>

        <Route exact path='/addactivity' element={<AddActivity/>}/>

        <Route exact path='/activities/update/:id' element={<ActivityUpdate/>}/>

        <Route exact path='/activities' element={<ActivitiesList/>}/>

         <Route exact path='/favorites' element={<Favorites/>}/>

        
        
      </Routes>      
      
    </div>
  );
}

export default App;
