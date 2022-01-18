import React, { useState, useEffect } from 'react';
import apiState from '../apiState';
import api from '../api'

export default function MeetInfluencer(){

  const [states, setStates] = useState([])
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [politic, setPolitic] = useState('')
  const [religiosity, setReliogisity] = useState('')
  const [followers, setFollowers] = useState('')
  const [tagChosen, setTagChosen] = useState('')
  const [userTags, setUserTags] = useState([])
  const [tags, setTags] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    apiState
      .get(`/${state}/municipios`)
      .then((response) => setStates(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

      console.log(states[0])
  }, [state]);

  useEffect(() => {
    api
    .post('/tags',{tag: tagChosen})
    .then((response) => setTags(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    })
  }, [tagChosen]);

  // useEffect(() => {
  //   api
  //   .get ('/users', {
  //     city: "",
  //     state: "AC",
  //     politic: "Liberal",
  //     followers: 900,
  //     religiosity: "Ateu",
  //     tags: ["tecnico", "area da saude","xbw","gae", "ui"] 
  //   })
  //   .then((response) => console.log(response))
  //   .catch((err) => {
  //     console.error("ops! ocorreu um erro" + err);
  //   })
  // }, []);
  
  async function getStateField(){
    var select = document.getElementById("states");
    var selectState = select.options[select.selectedIndex].value

    setState(selectState)
    console.log("to aki" + selectState)

    

    // fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios').then((resp)=> console.log({resp:resp}))
  }

  async function getCityField(){
    var select = document.getElementById("citys");
    var selectCity = select.options[select.selectedIndex].value

    setCity(selectCity)
    console.log("city é" + selectCity)

  }

  async function getPolitic(){
    var select = document.getElementById("politic");
    var selectPolitic = select.options[select.selectedIndex].value

    setPolitic(selectPolitic)
    
  }

  async function getReliogisity(){
    var select = document.getElementById("reliogisity");
    var selectReliogisity = select.options[select.selectedIndex].value

    setReliogisity(selectReliogisity)
    
  }

  
  function toggleRadioButtonTags(radioButton){
    console.log(radioButton)
    setTagChosen(radioButton)    
  }

  
  function getCheckBoxes(){
    // var checkedValue = document.querySelector('.form-checkbox-input:checked').value;

    // var checkedValue = null; 
    // var inputElements = document.getElementsByClassName('form-checkbox-input');
    // for(var i=0; inputElements[i]; ++i){
    //       if(inputElements[i].checked){
    //           checkedValue = inputElements[i].value;
    //           break;
    //       }
    // }

    var checkboxes = []


    var markedCheckbox = document.getElementsByName('pl');
    for (var checkbox of markedCheckbox) {
      if (checkbox.checked)
        // console.log(checkbox.value + ' ');
        checkboxes.push(checkbox.value)
    }

    // setTagChosen(checkboxes)
    
    //var allChecks = userTags + checkboxes
    
    var allChecks = [...userTags, ...checkboxes]
    
    setUserTags(allChecks)
    
  }


  function searchInfluencers(){
    console.log('state', state)
    console.log('city', city)
    console.log('politic', politic)
    console.log('religiosity', religiosity)
    console.log('followers', followers)
    console.log('tags',userTags)

    const users = {
      city,
      state,
      politic,
      followers : parseInt(followers),
      religiosity,
      tags: userTags
    }

    console.log("USUAIO", users)

    api
    .post('/users', users)
    .then((response) => setUsers(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    })
 
  }

  return(
    <>
      <div className="ml-3 mt-2">
        <h4>Procure seu influencer</h4>
        <div class="row">
                <div class="col-sm">
                  <h6>Estado</h6>
                  <select onClick={()=> getStateField()} id="states" name="states" class="form-select" aria-label="Default select example">
                      <option selected>Escolha o Estado</option>
                      <option value="12">Acre</option>
                      <option value="27">Alagoas</option>
                      <option value="16">Amapá</option>
                      <option value="13">Amazonas</option>
                      <option value="29">Bahia</option>
                      <option value="23">Ceará</option>
                      <option value="53">Distrito Federal</option>
                      <option value="32">Espírito Santo</option>
                      <option value="52">Goiás</option>
                      <option value="21">Maranhão</option>
                      <option value="51">Mato Grosso</option>
                      <option value="50">Mato Grosso do Sul</option>
                      <option value="31">Minas Gerais</option>
                      <option value="15">Pará</option>
                      <option value="25">Paraíba</option>
                      <option value="41">Paraná</option>
                      <option value="26">Pernambuco</option>
                      <option value="22">Piauí</option>
                      <option value="33">Rio de Janeiro</option>
                      <option value="24">Rio Grande do Norte</option>
                      <option value="43">Rio Grande do Sul</option>
                      <option value="11">Rondônia</option>
                      <option value="14">Roraima</option>
                      <option value="42">Santa Catarina</option>
                      <option value="35">São Paulo</option>
                      <option value="28">Sergipe</option>
                      <option value="17">Tocantins</option>
                  </select>
                </div>

                

                <div class="col-sm">
                  <h6>Cidade</h6>
                  <select onClick={()=> getCityField()} id="citys" name="citys" class="form-select" aria-label="Default select example">
                    <option selected>Escolha a cidade</option>
                    
                    {
                      states &&

                      states.map( (state) =>{
                        return(
                          <option value={state.nome}>{state.nome}</option>
                        )
                      })
                    }
                    
                    
                  </select>
                </div>

                <div class="col-sm">
                  <h6>Posição Política</h6>
                  <select onClick={()=> getPolitic()} id="politic" name="politic"  class="form-select" aria-label="Default select example">
                    <option selected>Escolha seu Posicionamento</option>
                    <option value="Centro">Centro</option>
                    <option value="Centro-direita">Centro-direita</option>
                    <option value="Centro-esquerda">Centro-esquerda</option>
                    <option value="Esquerda">Esquerda</option>
                    <option value="Liberal">Liberal</option>
                    <option value="Anarquismo">Anarquismo</option>
                    <option value="Sem Preferencia Politica">Sem Preferencia Politica</option>
                  </select>
                </div>

                <div class="col-sm">
                  <h6>Religiosidade</h6>
                  <select onClick={()=> getReliogisity()} class="form-select"id="reliogisity" name="reliogisity" aria-label="Default select example">
                    <option selected>Escolha um Segmento</option>
                    <option value="Cristianismo">Cristianismo</option>
                    <option value="Agnóstico">Agnóstico</option>
                    <option value="Espiritismo">Espiritismo</option>
                    <option value="Sihkismo">Sihkismo</option>
                    <option value="Budismo">Budismo</option>
                    <option value="Hinduísmo">Hinduísmo</option>
                    <option value="Islamismo">Islamismo</option>
                    <option value="Agnostico">Agnostico</option>
                    <option value="Ateu">Ateu</option>
                  </select>
                </div>

                <div className="col-sm">
                  <h6>Mínimo de Seguidores</h6>
                  <input onChange={e => setFollowers(e.target.value)}   type="number" placeholder="Ex: 900" name="followers" id="followers" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

              </div>

              <div>
                
            <div class="container mt-3">
              <h4>Tags Selecionadas: </h4>
              {
                userTags.length === 0 ? <label>Nenhuma Tag Selecionada</label> : ''
              }
              {userTags.map( (tag)=> {
                return(
                  <>
                  <label class="text-danger mr-1">{tag}</label>
                  <label class="text-danger mr-1">|</label>
                  </>
                )
              } )}
             
            </div>

            <div class="container mt-3 ">
              <div class="form-check form-check-inline mr-5">
                <input
                  onClick={()=> toggleRadioButtonTags('business')} 
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="business"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">Business</label>
              </div>

            <div class="form-check form-check-inline mr-5">
              <input
                onClick={()=> toggleRadioButtonTags('photograph')}
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="photograph"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio2">Fotografia</label>
            </div>

            <div class="form-check form-check-inline mr-5">
              <input
                onClick={()=> toggleRadioButtonTags('video')}
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="video"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio2">Vídeo</label>
            </div>

            <div class="form-check form-check-inline mr-5">
              <input
                onClick={()=> toggleRadioButtonTags('music')}
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="music"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio2">Música</label>
            </div>

            <div class="form-check form-check-inline mr-5">
              <input
                onClick={()=> toggleRadioButtonTags('education')}
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="education"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio2">Educação</label>
            </div>

            </div>

            <div class="container mt-3 ">
              <div class="form-check form-check-inline mr-5">
                <input
                  onClick={()=> toggleRadioButtonTags('food')}
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="food"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">Comida</label>
              </div>

            <div class="form-check form-check-inline mr-5">
              <input
                onClick={()=> toggleRadioButtonTags('trip')}
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="trip"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio2">Viagem</label>
            </div>

            <div class="form-check form-check-inline mr-5">
              <input
                onClick={()=> toggleRadioButtonTags('events')}
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="events"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio2">Eventos</label>
            </div>

            <div class="form-check form-check-inline mr-5">
              <input
                onClick={()=> toggleRadioButtonTags('games')}
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="games"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio2">Games</label>
            </div>

            <div class="form-check form-check-inline mr-5">
              <input
                onClick={()=> toggleRadioButtonTags('artist')}
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="artist"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio2">Artista</label>
            </div>

            <div class="form-check form-check-inline mr-5">
              <input
                onClick={()=> toggleRadioButtonTags('geek')}
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="geek"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio2">Geek</label>
            </div>

            </div>

            <div class="container mt-3 mb-2">
              {
                tagChosen && (
                 <>
                 <div class="form-check">
                    {
                      tags && 
                      tags.map( (tag)=>{
                        return(
                          <>
                        <input class="form-checkbox-input" name="pl" type="checkbox" value={tag} id="flexCheckDefault"/>
                        <label class="form-check-label ml-1 mr-2" for="flexCheckDefault">
                          {tag}
                        </label>
                        
                        </>
                        )
                      })
                    }
                </div>
                
                 </>
                )
              }
            </div>

            <div class="d-flex justify-content-end align-items-center mb-3">
              <button type="button" class="btn btn-warning w-25" onClick={()=> getCheckBoxes()}>Adicionar Tags</button>
            </div>
            </div>

            <div>
              <button class="btn btn-primary w-25" onClick={()=> searchInfluencers()}>BUSCAR INFLUENCER</button>
            </div> 

            <div class="line"></div>    
            {
              users && 
              users.map( (user)=> {
                return(
                  <div class="card mb-4" style={{padding: "5px"}}>
                    <div class="row" >
                        <div class="col-sm">
                          <h5>{user.name}</h5>
                        </div>
                        <div class="col-sm d-flex justify-content-end align-items-center">
                          <h5>{user.followers} Seguidores </h5>
                        </div>
                    </div>
                    <div class="row" >
                        <div class="col-sm">
                          {user.email}
                        </div>
                    </div>
                    <div class="row mt-2" >
                        <div class="col-sm">
                          <strong>Cidade:</strong> {user.city}
                        </div>
                        <div class="col-sm">
                          <strong>Política:</strong> {user.politic}
                        </div>
                        <div class="col-sm">
                          <strong>Religiosidade:</strong> {user.religiosity}
                        </div>
                    </div>    
                    <div class="row mt-3" >
                        <div class="col-sm">
                          <strong>TAGS:</strong> {`${user.tags}`+ ''}
                        </div>
                    </div>
                    <div class="row" >
                        <div class="col-sm d-flex justify-content-end align-items-center">
                          <button className='btn btn-primary'>Ver Perfil</button>
                        </div>
                    </div>
                  </div>
                )
              })
            }
            
        </div>
    </>
  )
}