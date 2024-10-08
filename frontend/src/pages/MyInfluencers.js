import React, { useState, useEffect, useContext } from 'react';
import $ from "jquery"
import api from '../api';
import history from '../history';
import { Context } from '../Context/AuthContext'; 
import NavBar from '../Components/NavBar';
import ReactWhatsapp from 'react-whatsapp';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import { SocialIcon } from 'react-social-icons';
import MyProfile from '../Components/Profile';
import { Switch, Route, Link } from 'react-router-dom';
import MyInfluencer from '../Components/MyInfluencer';


import "../styles/Profile.css"

import './../styles/button.css'
import './../styles/whatsappicon.css'

export default function MyInfluencers() {

  const [user, setUser] = useState([])

  const emailStorage = localStorage.getItem('email');
  const id = localStorage.getItem('id');
  const email = emailStorage.replace(/['"]+/g, '')

  const { handleLogout } = useContext(Context);
  
  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/user/${email}`);
      setUser( data.user.myInfluencers )
      console.log('datinha', data.user.myInfluencers)
    })();
  }, []);

 
  return(
    <>
    <div class="wrapper">
       
        <NavBar user={user} flagMenu="myinfluencers"/>
        <MyInfluencer influencers={user} />
        
    </div>
    </>
  )
  
}