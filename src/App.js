import styles from './App.module.css';
import Arraymap from './Arraymap';
import UsersObjMap from './usersObjMap';
import PlanetsMap from './PlanetsMap';
import { DemoStates } from './DemoStates';
import {DemoStates_2} from './DemoStates_2';
import { DemoStatesCSS } from './DemoStatesCSS';
import { Counter } from './Counter';
import DemoUseeffect1_p2 from './DemoUseeffect1_p2';
import { CatFact } from './apiCallComponent/catFact';
import {AgeGenerator} from './apiCallComponent/ageGenerator';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pagesForRouting/Home';
import { Menu } from './pagesForRouting/Menu';
import { Contact } from './pagesForRouting/Contact';
import Navigation from './pagesForRouting/Navigation';
import Profile from './ContextApiComps/profile';

import { createContext,useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const AppContext= createContext();

function App() {

  const client = new QueryClient();
  const [username,setUsername]= useState("Pedro") ;

  return (
    <div className={styles.App}>
      
      {/* <>
      <DemoStates></DemoStates>
      <Arraymap></Arraymap>
      <Jobs id='1' position='engineer'/>
      <Jobs id='2' position='doctor'/>
      <UsersObjMap></UsersObjMap>
      <PlanetsMap></PlanetsMap>
      <DemoStates_2/>
      <DemoStatesCSS/>
      <Counter></Counter>
      <DemoUseeffect1_p2/>
       <CatFact/>
      <AgeGenerator/>
      </> */}
      
      

      {/* Start for Routing  */}
      <QueryClientProvider client={client}>
      <AppContext.Provider value={{username,setUsername}}>
     
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/home" element ={<Home/>}/>
          <Route path="/menu" element ={<Menu/>}/>
          <Route path="/contact" element ={<Contact/>}/>
          <Route path="/profile" element ={<Profile/>}/>
        
          <Route path="/*" element ={<h1>404 Error Page not found</h1>}/>
        </Routes>
      </Router>
    
      </AppContext.Provider>
      </QueryClientProvider>

    </div>
  );
}



const Jobs=(props)=>{
  const isGreen=true;
  return(
    <>
    {/* <h1 className='job'>JOBS</h1>  Instead of classname= string we can use styles.name as we are using css modules */}
    <h1 style={{color: "red"}}>This is COLOR</h1>  
    <h1 style={{color: isGreen ?  "green": "red"}}>conditionally rendered COLOR</h1>  
    {/* this is how we can write css in react */}
   
   
    <h1 className={styles.job}>JOBS</h1>
    {/* this is how we use css modules */}
    <h2>Job ID: {props.id}</h2>
    <h2>Position: {props.position}</h2>
    
    </>
  );
}


export default App;
