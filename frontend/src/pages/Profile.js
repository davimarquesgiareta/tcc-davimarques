import React, { useState, useEffect, useContext } from 'react';
import $ from "jquery"
import api from '../api';
import history from '../history';
import { Context } from '../Context/AuthContext';

import './../styles/button.css'

export default function Profile() {

  const [data, setData] = useState({})

  const emailStorage = localStorage.getItem('email');
  const id = localStorage.getItem('id');

  const email = emailStorage.replace(/['"]+/g, '')

  const { handleLogout } = useContext(Context);
  
  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/user/${email}`);
      console.log('datinha', data)
    })();
  }, []);


  return(
    <>
    {
      console.log( 'data', data)
    }
    <h1>lal {email}</h1>
    <button onClick={()=> handleLogout()}>sair</button>
    </>
  )
  
}