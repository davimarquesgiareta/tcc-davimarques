import React, { useContext, useState } from 'react';
import { Context } from '../Context/AuthContext';
import history from '../history';

export default function Login() {
  const { handleLogin } = useContext(Context);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const token = localStorage.getItem('token')

  if (token){
    history.push('/profile') 
  }
  
   return (
    <>
      <div class="container mt-3 rounded-left" style={{background:"#F8F8FF"}} >
        <div class="form-group" >
          <label for="exampleInputEmail1" ><h4>E-mail</h4></label>
          <input type="email" class="form-control"  name="email" aria-describedby="emailHelp" placeholder="Digite seu e-mail" onChange={e => setEmail(e.target.value)}/>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1"><h4>Password</h4></label>
          <input type="password" class="form-control" name="password" placeholder="Digite sua senha" onChange={e => setPassword(e.target.value)}/>
        </div>
        <div class="d-flex justify-content-end align-items-center mb-3">
          <a href='/register' for="exampleInputPassword1" class="mr-3 ">Criar uma conta</a>
          <button type="button" class="btn btn-primary w-25" onClick={()=> handleLogin({email, password})}>Entrar</button>
        </div>
      </div>    
    </>
  )

}