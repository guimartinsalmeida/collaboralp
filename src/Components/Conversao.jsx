import React from "react";
import UserExperience from '../assets/image-removebg-preview.png';
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
          <span>Funis</span><br></br>
          Jornadas customizadas que conduzem à ação.
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
          <span>Engajamento</span><br></br>
          Comunicação relevante para nutrir e converter leads.
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
          <span>Testes A/B</span><br></br>
          Otimização constante para taxas de conversão superiores.
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
          <span>Resultados</span><br></br>
          Análise precisa para acompanhar seu crescimento.
        </p>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default ContentDos;
