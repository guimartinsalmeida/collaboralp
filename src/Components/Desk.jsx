/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import UserExperience from '../assets/UserExperience.png';
import OtimizacaoSeo from '../OtimizacaoSeo.png';
import gestaoTrafego from '../gestaoTrafego.png';
import resultado from '../resultado.png';
import resultadoDosSonhos from '../resultadoDosSonhos.png';
import flecha from '../flecha.svg';
import styles from './SecondSection.module.css';


const Desk = () => {
  return (
    <div className={styles.container}>
     
      <div className={styles.card}>
        <div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{width: '80%', display: 'flex', justifyContent: 'center'}}><img className={styles.image} src={UserExperience} alt="Imagem 1" /></div>
        
        </div>
        <div>
        <div className={styles.text}>
          <p><span>Site moderno,</span> muito bem elaborado e personalizado para sua marca</p>
        </div>
        </div>
        </div>
      </div>
      <div style={{display:'flex', alignItems:'center'}}><div style={{display:'flex', borderRadius:'120px', padding:'5px', border:'1px solid'}}><img style={{width:'15px', height:'15px'}} src={flecha}></img></div></div>
      <div className={styles.card}>
        <div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{width: '80%', display: 'flex', justifyContent: 'center'}}><img className={styles.image} src={OtimizacaoSeo} alt="Imagem 2" /></div>
        
        </div>
        <div>
        <div className={styles.text}>
          <p>Otimizações para rankeamento nos resultados de busca <span> (tráfego orgânico)</span></p>
        </div>
        </div>
        </div>
      </div>
      <div style={{display:'flex', alignItems:'center'}}><div style={{display:'flex', borderRadius:'120px', padding:'5px', border:'1px solid'}}><img style={{width:'15px', height:'15px'}} src={flecha}></img></div></div>
      <div className={styles.card}>
        <div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{width: '80%', display: 'flex', justifyContent: 'center'}}><img className={styles.image} src={gestaoTrafego} alt="Imagem 3" /></div>
        
        </div>
        <div>
        <div className={styles.text}>
          <p>Anúncios patrocinados para te colocar à frente da concorrência<span> (tráfego pago)</span></p>
        </div>
        </div>
        </div>
      </div>
      <div style={{display:'flex', alignItems:'center'}}><div style={{display:'flex', borderRadius:'120px', padding:'5px', border:'1px solid'}}><img style={{width:'15px', height:'15px'}} src={flecha}></img></div></div>
      <div className={styles.card}>
        <div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{width: '80%', display: 'flex', justifyContent: 'center'}}><img className={styles.image} src={resultado} alt="Imagem 4" /></div>
        
        </div>
        <div>
        <div className={styles.text}>
          <p><span>Primeiros retornos sobre investimento</span> e ajustes para melhorar cada vez mais a performance</p>
        </div>
        </div>
        </div>
      </div>
      <div style={{display:'flex', alignItems:'center'}}><div style={{display:'flex', borderRadius:'120px', padding:'5px', border:'1px solid'}}><img style={{width:'15px', height:'15px'}} src={flecha}></img></div></div>
      <div className={styles.card}>
        <div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{width: '80%', display: 'flex', justifyContent: 'center'}}><img className={styles.image} src={resultadoDosSonhos} alt="Imagem 5" /></div>
        
        </div>
      <div className={styles.text}>
        <p>Veja o <span>crescimento exponencial</span> da sua empresa</p>
      </div>
      </div>
 </div>
 </div>
  
  );
};

export default Desk;
