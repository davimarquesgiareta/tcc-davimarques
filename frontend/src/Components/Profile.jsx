import React from "react"
import { SocialIcon } from 'react-social-icons';

export default function MyProfile (props){
  const {user } = props

  return(
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
             <div style={{width:"100%", display:"flex", marginLeft:"15px"}}>
               
              { /* Tem que ter o https se não da ruim */}
              {/* { user.socialMedias && <SocialIcon  url={`https://${user.socialMedias[1]}`}/>   } */}
              
              <div style={{marginRight: "10px"}}>
                <SocialIcon  url={user.instagramLink}/> 
              </div>

              { user.socialMedias && 
                <>
                  {
                    user.socialMedias[0] !== '' ? 
                    <div style={{marginRight: "10px"}} >
                    <SocialIcon  url={user.socialMedias[0]}/>  
                    </div>
                    : ''
                  }
                  {
                    user.socialMedias[1] !== '' ? <SocialIcon  url={user.socialMedias[1]}/>  : ''
                  }
                </>   
              }
              </div>
            </div>

            <a href={`https://api.whatsapp.com/send?phone=55 ${user.whatsapp}&text=Olá, vi seu perfil no Influencers Search, e gostaria fazer uma parceria!`} class="float" target="_blank">
            <i  class="fa fa-whatsapp my-float"></i>
            </a>

            <div class="line"></div>            
        </div>
  )
}