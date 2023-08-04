import React from 'react';
import UserExperience from '../assets/UserExperience.png';
import OtimizacaoSeo from '../OtimizacaoSeo.png';
import gestaoTrafego from '../gestaoTrafego.png';
import resultado from '../resultado.png';
import resultadoDosSonhos from '../resultadoDosSonhos.png';
import styles from './SecondSection.module.css';


const Desk = () => {
  return (
    <div className={styles.container}>
     
      <div className={styles.card}>
        <img className={styles.image} src={UserExperience} alt="Imagem 1" />
        <p className={styles.text}>
          <span>Site moderno,</span> muito bem elaborado e personalizado para sua marca
        </p>
      </div>
      <div className={styles.card}>
        <img className={styles.image} src={OtimizacaoSeo} alt="Imagem 2" />
        <p className={styles.text}>
          Otimizações para rankeamento nos resultados de busca <span> (tráfego orgânico)</span>
        </p>
      </div>
      <div className={styles.card}>
        <img className={styles.image} src={gestaoTrafego} alt="Imagem 3" />
        <p className={styles.text}>
          Anúncios patrocinados para te colocar à frente da concorrência<span> (tráfego pago)</span>
        </p>
      </div>
      <div className={styles.card}>
        <img className={styles.image} src={resultado} alt="Imagem 4" />
        <p className={styles.text}>
          <span>Primeiros retornos sobre investimento</span> e ajustes para melhorar cada vez mais a performance
        </p>
      </div>
      <div className={styles.card}>
        <img className={styles.image} src={resultadoDosSonhos} alt="Imagem 5" />
        <p className={styles.text}>Veja o <span>crescimento exponencial</span> da sua empresa</p>
      </div>
    </div>
  );
};

export default Desk;
