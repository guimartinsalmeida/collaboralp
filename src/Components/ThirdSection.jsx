import React from 'react'
import Group2 from '../Group2.svg'
import styles from './ThirdSection.module.css'
import image1 from '../img1.png'
import image2 from '../img2.png'
import image3 from '../img3.png'
function ThirdSection() {
  return (

    
    <div className={styles.GeneralContainerThirdSection}> 
        <div className={styles.GeneralContainerCopyThirdSection}>
            <div className={styles.ContainerCopyImageThirdSection}>
                <p>Tratamos seu </p>
                <img src={Group2} alt="" />
            </div>
            <div className={styles.ContainerSubtitleThirdSection}>
                <p>negócio<span> igual o nosso!</span></p>
            </div>

            <p className={styles.ParagraphThirdSection}>Você precisa de <span>leads qualificados</span> para escalar suas vendas</p>
        </div>

        <div className={styles.container}>
      <div className={styles.businessTreatment}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={image1} alt="Imagem 1" />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Presença estratégica</h2>
          <p className={styles.text}>Estudamos o cliente ideal, seu perfil, necessidades e gatilhos. Depois monstamos estrátégias de anúncios para encontrar esses clientes</p>
        </div>
      </div>
      <div className={styles.businessTreatment}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={image2} alt="Imagem 2" />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Analise de dados</h2>
          <p className={styles.text}>Com nosso know-how e cases de sucesso, sabemos quais métricas devemos constatemente analisar para garatir o sucesso das campanhas</p>
        </div>
      </div>
      <div className={styles.businessTreatment}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={image3} alt="Imagem 3" />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Crescimento planejado</h2>
          <p className={styles.text}>É extremamente importante traçarmos metas claras, objetivas e palpáveis para medir o crescimento da sua empresa de forma concisa e direcionada</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ThirdSection