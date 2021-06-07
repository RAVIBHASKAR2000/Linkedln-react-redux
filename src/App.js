import React,{useEffect} from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';
import { useSelector } from 'react-redux';
import { selectUser, logout } from './features/userSlice';
import Login from "./Login.js";
import { auth } from './firebase';

import {useDispatch} from "react-redux";
import {login } from "./features/userSlice";
import Widgets from "./Widgets.js";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=> {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        //user logged in 
        dispatch(login({
                   email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName,
                    photoURL:userAuth.photoURL
        }));
      }
      else{
        // user logged out
        dispatch(logout());
      }
    })
  },[])
  return (
    <div className="app">
     
      <Header />
      {/*app body */}

        {!user ? ( <Login /> ) : (

      <div className="app__body">
      
        <Sidebar/>


        <Feed />
        <Widgets />
      </div>
      )}
    </div>
  );
}

export default App;
