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

            <div className='row' >
             <div className='col-1'>
               {
                 console.log(user.socialMedias)
               }
               {
                 
                 user.socialMedias && <h2> to existindo</h2>
               }
               
             <SocialMediaIconsReact  borderColor="rgba(0,0,0,0.25)" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" url="https://some-website.com/my-social-media-url" size="48" />
             </div>
             <div className='col-5'>
             <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="youtube" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(255,36,0,1)" url="https://some-website.com/my-social-media-url" size="48" />
             </div>
            </div>
            
            <div style={{background:"yellow" }}>
            
            
            
            </div>
            
                      
            <a href={`https://api.whatsapp.com/send?phone=55 ${user.whatsapp}&text=Olá, vi seu perfil no Influencers Search, e gostaria fazer uma parceria!`} class="float" target="_blank">
            <i  class="fa fa-whatsapp my-float"></i>
            </a>

            <div class="line"></div>            
        </div>
    </div>
    </>
  )
  
}