import React from "react";
import UserExperience from '../assets/UserExperience.png';
import './dos.css'
function ContentDos() {
  return (
    <div
    className="container-general"
    >
      <div
      className="container-vantagens"
      >
        <div className="container-content">
        <div><img src={UserExperience} style={{width:'120px'}} alt="" /></div>
        <div>
        <p className="paragrafo">
          <span>Inteligência artificia</span><br></br>
          Ferramentas de ponta para destacar seu negócio.
        </p>
        </div>
      </div>
      </div>
      <div
        className="container-vantagens"
      >
        <div className="container-content">
        <div><img src={UserExperience} style={{width:'120px'}} alt="" /></div>
        <div>
        <p className="paragrafo">
          <span>Automações</span><br></br>
          Otimizamos seus processos de vendas e marketing.
        </p>
        </div>
      </div>
      </div>
      <div
        className="container-vantagens"
      >
        <div className="container-content">
        <div><img src={UserExperience} style={{width:'120px'}} alt="" /></div>
        <div>
        <p className="paragrafo">
          <span>Dados em Tempo Real:</span><br></br>
          Tome decisões com dados e relatórios que fornecemos.
        </p>
        </div>
      </div>
      </div>
      <div
        className="container-vantagens"
      >
        <div className="container-content">
        <div><img src={UserExperience} style={{width:'120px'}} alt="" /></div>
        <div>
        <p className="paragrafo">
          <span>Integração</span><br></br>
          Tecnologias que se alinham perfeitamente às suas necessidades.
        </p>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default ContentDos;
