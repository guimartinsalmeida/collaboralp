import React from 'react';
import style from './FifthSection.module.css'
import ContentDos from './ContentDos'

import './dos.css'

const Tabeamento = () => {
 

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{display: 'flex', justifyContent: 'center', width: '84%', maxWidth:'1365px', flexDirection: 'column', alignItems: 'flex-start'}}>
            <div>
                <p style={{fontSize: '52px', fontWeight: '600', lineHeight: 'initial'}}><span>Preciso de uma equipe </span><br/>de marketing completo ?</p>
                <p style={{margin: '0px'}}>Nada disso !</p>
                <p style={{color: '#525252', marginBottom: '40px'}}>O que Adianta ter muitos colaboradores em um projeto sem uma estrategia clara</p>
            </div>
      <div style={{width: '100%'}} class="row">
  <div class="col-3">
    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <a className={style.nav} class="nav-link active" id="v-pills-first-tab" data-toggle="pill" href="#v-pills-first" role="tab" aria-controls="v-pills-first" aria-selected="true">Economia financeira</a>

      <a className={style.nav} class="nav-link" id="v-pills-especializacao-tab" data-toggle="pill" href="#v-pills-especializacao" role="tab" aria-controls="v-pills-especializacao" aria-selected="false">Especialização</a>
      <a className={style.nav} class="nav-link" id="v-pills-resultados-mensuraveis-tab" data-toggle="pill" href="#v-pills-resultados-mensuraveis" role="tab" aria-controls="v-pills-resultados-mensuraveis" aria-selected="false">Resultados mensuraveis</a>
      <a className={style.nav} class="nav-link" id="v-pills-core-business-tab" data-toggle="pill" href="#v-pills-core-business" role="tab" aria-controls="v-pills-core-business" aria-selected="false">Core Business</a>
      <a className={style.nav} class="nav-link" id="v-pills-ferramentas-tecnologias-tab" data-toggle="pill" href="#v-pills-ferramentas-tecnologias" role="tab" aria-controls="v-pills-ferramentas-tecnologias" aria-selected="false">Ferramentas e tecnologia</a>
    </div>
  </div>
  <div class="col-9">
    <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><ContentDos/></div> 
      <div class="tab-pane fade" id="v-pills-especializacao" role="tabpanel" aria-labelledby="v-pills-especializacao-tab"><ContentDos/></div>
      <div class="tab-pane fade" id="v-pills-resultados-mensuraveis" role="tabpanel" aria-labelledby="v-pills-resultados-mensuraveis-tab"><ContentDos/></div>
      <div class="tab-pane fade" id="v-pills-core-business" role="tabpanel" aria-labelledby="v-pills-core-business-tab"><ContentDos/></div>
      <div class="tab-pane fade" id="v-pills-ferramentas-tecnologias" role="tabpanel" aria-labelledby="v-pills-ferramentas-tecnologias-tab"><ContentDos/></div>
    </div>
  </div>
</div>
</div>
    </div>
  );
};

export default Tabeamento;
