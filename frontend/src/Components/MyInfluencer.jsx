import React from "react"
import api from "../api";

export default function MyInfluencer(props) {

  const { influencers } = props

  console.log("**-> " + influencers)

  const emailStorage = localStorage.getItem('email');
  const email = emailStorage.replace(/['"]+/g, '')

  var emailInfluencer = ''

 async function removeInfluencer(){
   
   await api
    .post(`/deleteinfluencer`, { me: email, emailinfluencer: emailInfluencer })
    .then((response) => console.log(response))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    })

    alert("Influencer deletado com sucesso!")
    window.location.reload()

  }

  return(
    <div style={{ width:"100%", padding:"5px"}}>
    <h2 class="ml-3" >Meus Influencers</h2>

    <div>
    {
      influencers.map( (influencer) => {
        return(
          <div class="card mb-4 ml-3 mr-3" style={{padding: "5px"}}>
                    <div class="row" >
                        <div class="col-sm">
                          <h5>{influencer.name}</h5>
                        </div>
                        <div class="col-sm d-flex justify-content-end align-items-center">
                          <h5>{influencer.followers} Seguidores </h5>
                        </div>
                    </div>
                    <div class="row" >
                        <div class="col-sm">
                          {influencer.email}
                        </div>
                    </div>
                    <div class="row mt-2" >
                        <div class="col-sm">
                          <strong>Cidade:</strong> {influencer.city}
                        </div>
                        <div class="col-sm">
                          <strong>Política:</strong> {influencer.politic}
                        </div>
                        <div class="col-sm">
                          <strong>Religiosidade:</strong> {influencer.religiosity}
                        </div>
                    </div>    
                    <div class="row mt-3" >
                        <div class="col-sm">
                          <strong>TAGS:</strong> {`${influencer.tags}`+ ''}
                        </div>
                    </div>
                    <div class="row" >
                        <div class="col-sm d-flex justify-content-end align-items-center">
                          {/* <Link to="/qualquer"> */}
                          <a href={`/influencer/${influencer.email}`}>
                          <button className='btn btn-primary'>Ver Perfil</button>
                          </a>

                          <a className="ml-1" >
                          <button data-toggle="modal" data-target="#exampleModal" onClick={()=> emailInfluencer = influencer.email } className='btn btn-danger'>Remover Perfil</button>
                          </a>
                          
                          {/* </Link> */}
                        </div>
                        
                    </div>
                  </div>
        )

      })
    }
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Remover Influencer</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Tem certeza que quer remover este influencer?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
        <button onClick={()=> removeInfluencer()} data-dismiss="modal" type="button" class="btn btn-primary">Remover</button>
      </div>
    </div>
  </div>
</div>
  </div>
  )
}