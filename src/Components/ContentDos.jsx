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
          <span>Eficiência</span><br></br>
          Equipe a sua disposição para qualquer projeto.
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
          <span>Personalização</span><br></br>
          Tudo é totalmente personalizado para sua empresa.
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
          <span>ROI</span><br></br>
          Investimento que gera retorno real.
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
          <span>Tempo:</span><br></br>
          Ganhe velocidade focando no Core Business.
        </p>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default ContentDos;
