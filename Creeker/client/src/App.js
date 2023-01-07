import React, { useState }  from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import ApplicationViews from "./components/views/ApplicationViews";
import Header from './components/nav/Header';
import { useEffect } from 'react';
import Authorize from './components/views/Authorize';

function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(true);
  const [isAdmin, setIsAdmin] = useState(true);
  const localUser = localStorage.getItem('user')
  const userObject = JSON.parse(localUser)
    


  useEffect(()=>{
    if(!localStorage.getItem("user")){
      setIsLoggedIn(false)
      
    }
  },[isLoggedIn])

  return (
    <Router>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>
        { isLoggedIn ?
        <ApplicationViews  />
        :
        <Authorize setIsLoggedIn={setIsLoggedIn}/>
      }

    </Router>
  );
}

export default App;