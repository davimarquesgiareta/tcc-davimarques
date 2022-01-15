import React, { useState, useEffect } from 'react';
import apiState from '../apiState';


export default function MeetInfluencer(){

  const [states, setStates] = useState([])
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [politic, setPolitic] = useState('')
  const [religiosity, setReliogisity] = useState('')

  useEffect(() => {
    apiState
      .get(`/${state}/municipios`)
      .then((response) => setStates(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

      console.log(states[0])
  }, [state]);

  
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
              </div>


            </div>
      
    </>
  )
}