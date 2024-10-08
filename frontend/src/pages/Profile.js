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


import "../styles/Profile.css"

import './../styles/button.css'
import './../styles/whatsappicon.css'

export default function Profile() {

  const [user, setUser] = useState({})

  const emailStorage = localStorage.getItem('email');
  const id = localStorage.getItem('id');

  var link = "twitter.com/davizerashow"

  const email = emailStorage.replace(/['"]+/g, '')

  const { handleLogout } = useContext(Context);
  
  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/user/${email}`);
      setUser( data.user )
      console.log('datinha', data.user)
    })();
  }, []);

 
  
  // console.log('ai', typeof(user.socialMedias) )


  return(
    <>
    <div class="wrapper">
       
        <NavBar user={user} flagMenu="myprofile"/>


        {/* <main>
          <Switch>
            <Route path="/perfil" component={MeetInfluencer}/>
          </Switch>
        </main> */}
        <MyProfile user={user} />
        
    </div>
    </>
  )
  
}