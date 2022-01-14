import React from "react"

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
                    <a href="#homeSubmenu">Meu Perfil</a>
                </li>
                <li>
                    <a href="#">Meus Influencers</a>
                </li>
                <li>
                    <a href="#">Procurar Influencers</a>
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