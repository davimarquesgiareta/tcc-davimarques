import React, { useState, useEffect, useContext } from 'react';
import $ from "jquery"
import api from '../api';
import history from '../history';
import { Context } from '../Context/AuthContext';

import './../styles/button.css'

export default function Profile() {
  // const emailStorage = localStorage.getItem('email');

  const { handleLogout } = useContext(Context);
  
  // useEffect(() => {
  //   (async () => {
  //     const { data } = await api.get('/rotaDoProfile');
  //   })();
  // }, []);

  return(
    <>
    <h1>lal</h1>
    <button onClick={()=> handleLogout()}>sair</button>
    </>
  )
  
}