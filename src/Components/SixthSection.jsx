import React from "react";
import style from "./SixthSection.module.css";
import socialMedia from "../a.png";
import Twitter from "../twitter.png";
import Instagram from "../instagram.png";
import Linkedin from "../linkedin.png";
import logoCollabora from '../home.svg'
function SixthSection() {
  return (
    <div className={style.containerMainFooter} >
        <div className={style.containerFooter}>
      <div className={style.containerFooterCTA}>
        <p className={style.containerParagraphSixthSection}
          
        >
          Pronto para{" "}
          <span>
            transformar sua <br /> empresa em uma máquina de vendas?
          </span>
        </p>
      
      <div>
      <a href='https://forms.zohopublic.com/collabora/form/hotlead/formperma/z4ma0moqGcjW96SXz6NJfXhOFiu56ipHvX_SlRzBBJg'>

        <button className={style.buttonCtaSixthSection}>Começar agora</button>
        </a>
      </div>
      </div>
      
      </div>
      <div className={style.containerFooterLogos}>
        <div className={style.linearGradientContainer}>
          <div className={style.linearGradient}></div>
        </div>
        <div className={style.containerFooterLogosTexts} >
          <div>      <img className={style.collaboraLogo} src={logoCollabora} alt="" />
</div>
          <div>
            <p className={style.copyWrithg} style={{margin:'0px'}}>
              © Todos os Direitos Reservados. Collabora - Assessoria de
              Marketing e Vendas
            </p>
          </div>
          <div className={style.containerLogosSocialMedia}>
            <img src={socialMedia} alt="" />
            <img src={Instagram} alt="" />
            <img src={Twitter} alt="" />
            <img src={Linkedin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SixthSection;
