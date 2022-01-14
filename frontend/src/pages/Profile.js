import React, { useState, useEffect, useContext } from 'react';
import $ from "jquery"
import api from '../api';
import history from '../history';
import { Context } from '../Context/AuthContext'; 
import NavBar from '../Components/NavBar';
import ReactWhatsapp from 'react-whatsapp';
import { SocialMediaIconsReact } from 'social-media-icons-react';

import "../styles/Profile.css"

import './../styles/button.css'
import './../styles/whatsappicon.css'

export default function Profile() {

  const [user, setUser] = useState({})

  const emailStorage = localStorage.getItem('email');
  const id = localStorage.getItem('id');

  const email = emailStorage.replace(/['"]+/g, '')

  const { handleLogout } = useContext(Context);
  
  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/user/${email}`);
      setUser( data.user )
      console.log('datinha', data.user)
    })();
  }, []);


  return(
    <>
    <div class="wrapper">
       
        <NavBar user={user}/>

        <div id="content">

                    

            <h2>Meu Perfil </h2>
            <p> <strong>Nome:</strong> {user.name} </p>
            <p> <strong>Cidade:</strong> {user.city} </p>
            <p> <strong>Posição Política:</strong> {user.politic} </p>
            <p> <strong>Religiosidade:</strong> {user.religiosity} </p>
            <p> <strong>Minhas Tags: </strong> 
            {user.tags + ''}
            </p>
                      
            <a href={`https://api.whatsapp.com/send?phone=55 ${user.whatsapp}&text=Olá, vi seu perfil no Influencers Search, e gostaria fazer uma parceria!`} class="float" target="_blank">
            <i  class="fa fa-whatsapp my-float"></i>
            </a>

            <div class="line"></div>            
        </div>
    </div>
    </>
  )
  
}