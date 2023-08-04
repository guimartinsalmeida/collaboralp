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
          <span>Redução de Custos Operacionais</span><br></br>
          Menos gastos com pessoal e infraestrutura.
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
          <span>Acesso a Especialistas por Demanda</span><br></br>
          Utilização de profissionais específicos conforme necessidade.
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
          <span>Foco na Estratégia e Eficiência</span><br></br>
          Concentração de esforços em resultados e metas.
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
          <span>Investimentos Direcionados</span><br></br>
          Alocação de recursos em áreas estratégicas de marketing.
        </p>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default ContentDos;
