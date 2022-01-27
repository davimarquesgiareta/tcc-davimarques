import React from "react"
import { Link } from "react-router-dom"

export default function NavBar(props){

  const { user, flagMenu } = props
  var active = true

  return (
    <>
    <nav id="sidebar">
            <div class="sidebar-header">
                <h3>{user.name}</h3>
            </div>

            <ul class="list-unstyled components">
                <p>Influencers Search 1.0</p>
            
                <li className={ flagMenu === 'myprofile' ? "active" : "false" } >
                    <Link to="/profile"> Meu Perfil </Link>
                    {/* <a href="#homeSubmenu">Meu Perfil</a> */}
                </li>
                <li className={ flagMenu === 'myinfluencers' ? "active" : "false" }>
                    <Link to="/meusinfluencers"> Meus Influencers </Link>
                    {/* <a href="#">Meus Influencers</a> */}
                </li>
                <li className={ flagMenu === 'meetinfluencers' ? "active" : "false" }>
                    <Link to="/influencers"> Procurar Influencers </Link>
                    {/* <a href="influencers">Procurar Influencers</a> */}
                </li>
            </ul>

            <ul class="list-unstyled CTAs">
                <li>
                    <a href="" onClick={()=>{console.log("clikei")}} class="download">Sair</a>
                </li>
            </ul>
        </nav>
    </>
  )
}