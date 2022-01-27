import React, {useState, useEffect} from "react"
import api from "../api";
import { SocialIcon } from 'react-social-icons';

export default function MyProfile (props){
  const {user , flagMyProfile } = props

  const [myInfluencers, setMyInfluencers] = useState([])
  const [isMyInfluencer, setIsMyInfluencer] = useState(false)

  const emailStorage = localStorage.getItem('email');
  const email = emailStorage.replace(/['"]+/g, '')

  useEffect(() => {
    api
    .get(`/user/${email}`)
    .then((response) => setMyInfluencers(response.data.user.myInfluencers))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    })
  }, []);

 async function addInfluencer(){
    console.log("me: ", email)
    console.log("influencer",user.email)

    var flagAdd = true

    myInfluencers.forEach(element => {
      if (element.email === user.email || element.email === email){
        flagAdd = false
        alert("Este Influencer já está na sua lista")
      }
    });

    if (flagAdd){
      await api
      .post('/addinfluencer',{me: email, influencer:user.email})
      .then((response) => alert("Influencer Adicionado a sua lista!") )
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      })

      window.location.reload()

    }
   
  }

  return(
    <div id="content">

                    
            {
              flagMyProfile === true ? '' : <h2>Meu Perfil </h2>
            }
            
            <p> <strong>Nome:</strong> {user.name} </p>
            <p> <strong>Cidade:</strong> {user.city} </p>
            <p> <strong>Posição Política:</strong> {user.politic} </p>
            <p> <strong>Religiosidade:</strong> {user.religiosity} </p>
            <p> <strong>Minhas Tags: </strong> 
            {user.tags + ''}
            </p>
            <p> <strong>Seguidores:</strong> {user.followers} </p>

            

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
                    
                    <SocialIcon target="_blank"  url={user.socialMedias[0]}/>  
                    
                    </div>
                    : ''
                  }
                  {
                    user.socialMedias[1] !== '' ? <SocialIcon  target="_blank" url={user.socialMedias[1]}/>  : ''
                  }
                </>   
              }
              </div>
            </div>

            <a href={`https://api.whatsapp.com/send?phone=55 ${user.whatsapp}&text=Olá, vi seu perfil no Influencers Search, e gostaria fazer uma parceria!`} class="float" target="_blank">
            <i  class="fa fa-whatsapp my-float"></i>
            </a>

            <div class="line"></div>    

            <div>
              <button onClick={()=> addInfluencer()} className="btn btn-primary">+ Adicionar a minha lista</button>  
            </div>        
        </div>
  )
}