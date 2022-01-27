import React from "react"
import { Link } from "react-router-dom"

export default function NavBar(props){

  const { user } = props

  return (
    <>
    <nav id="sidebar">
            <div class="sidebar-header">
                <h3>{user.name}</h3>
            </div>

            <ul class="list-unstyled components">
                <p>Influencers Search 1.0</p>
                <li class="active">
                    <Link to="/profile"> Meu Perfil </Link>
                    {/* <a href="#homeSubmenu">Meu Perfil</a> */}
                </li>
                <li>
                    <Link to="/meusinfluencers"> Meus Influencers </Link>
                    {/* <a href="#">Meus Influencers</a> */}
                </li>
                <li>
                    <Link to="/influencers"> Procurar Influencers </Link>
                    {/* <a href="influencers">Procurar Influencers</a> */}
                </li>
            </ul>

            <ul class="list-unstyled CTAs">
                <li>
                    <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" onClick={()=>{console.log("clikei")}} class="download">Sair</a>
                </li>
            </ul>
        </nav>
    </>
  )
}