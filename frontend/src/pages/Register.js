import api from '../api';
import apiState from '../apiState';
import apiInstagram from '../api.Instagram';
import history from '../history';
import React, { useState, useEffect } from 'react';


export default function Register() {
 
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [states, setStates] = useState([])
  const [politic, setPolitic] = useState('')
  const [religiosity, setReliogisity] = useState('')
  const [followers, setFollowers] = useState('')
  const [instagramProfile, setInstagramProfile] = useState('')
  const [tagChosen, setTagChosen] = useState('')
  const [tags, setTags] = useState([])
  const [userTags, setUserTags] = useState([])
  const [whatsapp, setWhatsapp]= useState('')
  const [twitter, setTwitter] = useState('')
  const [youtube, setYoutube] = useState('')

  const [flagRadioButton, setFlagRadioButton] = useState(false)
  const [flagRadioButton2, setFlagRadioButton2] = useState(false)
  const [flagRadioButton3, setFlagRadioButton3] = useState(false)
  const [flagRadioButton4, setFlagRadioButton4] = useState(false)

  var estado = state
  //https://www.instagram.com/bianeaime/?__a=1
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

  

   async function getFollowers (){

    console.log('-->',instagramProfile)

   api
    .post('/followers',{user: instagramProfile})
    .then((response) => setFollowers(response.data.followers))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });

   
    
   }

  function submitTeste(){
    
    const user = {
      name: name,
      email: email,
      password: password,
      confirmpassword: confirmPassword,
      city: city,
      state: state,
      politic: politic,
      religiosity: religiosity,
      instagramLink: `https://instagram.com/${instagramProfile}`,
      followers: followers,
      tags: userTags,
      whatsapp: whatsapp,
      socialMedias: [youtube, twitter]

    }

    

    console.log(user)
    
  } 

  async function submit (){

    if (password === confirmPassword && password!== '' && email !== '' && name !== ''){
    
      const response = await api.post("/auth/register", {
        name: name,
        email: email,
        password: password,
        confirmpassword: confirmPassword,
        city: city,
        state: state,
        politic: politic,
        religiosity: religiosity,
        instagramLink: `https://instagram.com/${instagramProfile}`,
        followers: followers,
        tags: userTags,
        whatsapp: whatsapp,
        socialMedias: [youtube, twitter]
      }); 

      alert("Conta criada com sucesso!")

      history.push('/login');
    }
  }

  function toggleRadioButton(radioButton){

    if (radioButton === 'radiobutton'){
      setFlagRadioButton2(false)
      setFlagRadioButton(true)
      
    }

    if (radioButton === 'radiobutton2'){
      setFlagRadioButton(false)
      setFlagRadioButton2(true)
    }

    if (radioButton === 'radiobutton3'){
      setFlagRadioButton4(false)
      setFlagRadioButton3(true)
    }

    if (radioButton === 'radiobutton4'){
      setFlagRadioButton3(false)
      setFlagRadioButton4(true)
    }
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

  return (
  <>
    <div class="container">
      <h3>Cadastro</h3>
    </div>
    <div class="container mt-3 rounded-left" style={{background:"#F8F8FF"}} >
      <div class="form-group" >
        <label for="exampleInputEmail1" ><h4>Nome</h4></label>
        <input type="text" class="form-control"  name="name" aria-describedby="emailHelp" placeholder="Digite seu Nome" onChange={e => setName(e.target.value)}/>
      </div>
      <div class="form-group" >
        <label for="exampleInputEmail1" ><h4>E-mail</h4></label>
        <input type="email" class="form-control"  name="email" aria-describedby="emailHelp" placeholder="Digite seu e-mail" onChange={e => setEmail(e.target.value)}/>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1"><h4>Senha</h4></label>
        <input type="password" class="form-control" name="password" placeholder="Digite sua senha" onChange={e => setPassword(e.target.value)}/>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1"><h4>Confirmar Senha</h4></label>
        <input type="password" class="form-control" name="confirmPassword" placeholder="Digite sua senha" onChange={e => setConfirmPassword(e.target.value)}/>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1"><h4>Gostaria de já preencher seu perfil de influencer?</h4></label>
      </div>
      
      <div class="form-check">
        <input
          onClick={()=> toggleRadioButton('radiobutton') }
          class="form-check-input"
          type="radio"
          name="radioButton"
          id="radioButton1"
          
        />
        <label class="form-check-label" for="flexRadioDefault1"> Sim, já quero preencher o perfil!  </label>
      </div>
      <div class="form-check">
        <input
          onClick={()=> toggleRadioButton('radiobutton2') }
          class="form-check-input"
          type="radio"
          name="radioButton"
          id="radioButton2"
        />
        <label class="form-check-label" for="flexRadioDefault1"> Não, por enquanto só quero cadastrar </label>
      </div>

      {
        flagRadioButton && (
          <>
            <div class="container mt-4">
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
              </div>


            </div>

            
            
            <div class="container mt-3">
              
              <div class="row" >
                <div class="col-12">
                  <input name="instagramLink" placeholder='Ex: davimgcb' onChange={e => setInstagramProfile(e.target.value)} id="instagramLink" style={{width:"100%"}}></input>
                </div>
              </div>

              <div class="row">
                <div class="col-sm">
                  <h6>Usuário do Instagram</h6>
                  <button onClick={()=> getFollowers()}>Buscar Perfil</button>
                </div>
              </div>

              {
                followers && (
                  <div>
                    <h3>{instagramProfile}</h3>
                    <h4>Seguidores : {followers}</h4>
                  </div>
                  
                )
              }

            </div>

            <div class="container mt-3">
             <h6>Escolha as 5 tags que mais representam você e seu ciclo social: </h6>
            </div>

            <div class="container mt-3">
              <h4>Suas tags: </h4>
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

            <div class="container bg-warning mt-3 mb-2">
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
              <button type="button" class="btn btn-primary w-25" onClick={()=> getCheckBoxes()}>Adicionar Tags</button>
            </div>

            <div class="d-flex justify-content-end align-items-center mb-3">
              <button type="button" class="btn btn-primary w-25" onClick={()=> console.log('tags', userTags)}>VER</button>
            </div>

            <div class="container">
              <div class="row">
                <div class="col">
                  <h5>Whatsapp para entrar em contato</h5>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-9">
                  <input onChange={e => setWhatsapp(e.target.value)} style={{width:"100%"}}></input>
                </div>
              </div>
            </div>

            <div class="container mt-5">
             <div>
              <h5>Gostaria de adicionar os links de seu canal do Youtube ou/e do Twitter?  </h5>
             </div>
             <div>
               <label >Os números de seguidores destas redes sociais não entrará como pesquisa
                      mas servirá para engradecer seu perfil! 
               </label> 
             </div>
            </div>

            <div class="form-check">
              <input
                onClick={()=> toggleRadioButton('radiobutton3') }
                class="form-check-input"
                type="radio"
                name="radioButton"
                id="radioButton3"
                
              />
              <label class="form-check-label" for="flexRadioDefault1"> Sim, gostaria!  </label>
            </div>
            <div class="form-check mb-4">
              <input
                onClick={()=> toggleRadioButton('radiobutton4') }
                class="form-check-input"
                type="radio"
                name="radioButton"
                id="radioButton4"
              />
              <label class="form-check-label" for="flexRadioDefault1"> Por enquanto não! </label>
            </div>

            {
              flagRadioButton3 && (
                <div className="container mt-3">
                  <div>
                    <div className='row'>
                      <div className='col'>
                        <h6>Link do seu canal do youtube</h6>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-9'>
                        <input onChange={e => setYoutube(e.target.value)} style={{width:"100%"}}></input>
                      </div>
                    </div>
                  </div>

                  <div className='mt-3'>
                    <div className='row'>
                      <div className='col'>
                        <h6>Link do seu Twitter</h6>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-9'>
                        <input onChange={e => setTwitter(e.target.value)} style={{width:"100%"}}></input>
                      </div>
                    </div>
                  </div>

                  <div class="d-flex justify-content-center align-items-center mb-3 mt-3">
                    <a href='/login' for="exampleInputPassword1" class="mr-3 ">Voltar</a>
                    <button type="button" class="btn btn-primary w-25" onClick={()=> submit()}>Criar Conta</button>
                  </div>

                </div>

                
              )
            }

            {
              flagRadioButton4 && (
                <div class="d-flex justify-content-end align-items-center mb-3">
                  <a href='/login' for="exampleInputPassword1" class="mr-3 ">Voltar</a>
                  <button type="button" class="btn btn-primary w-25" onClick={()=> submit()}>Criar Conta x</button>
                </div>
              )
            }
          </>
        )
      }
      
      {
        flagRadioButton2 && (
          <div class="d-flex justify-content-end align-items-center mb-3">
            <a href='/login' for="exampleInputPassword1" class="mr-3 ">Voltar</a>
            <button type="button" class="btn btn-primary w-25" onClick={()=> submitTeste()}>Criar Conta Y</button>
          </div>
        )
      }


      


      
    </div>    
  </>  
  )
}