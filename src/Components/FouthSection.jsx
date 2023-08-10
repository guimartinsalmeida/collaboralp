import React from 'react'
import numeros from '../numeros.png'
import style from './FourthSection.module.css'

function FouthSection() {
  return (
    <div className={style.FouthSection}>
    <div className={style.generalContainerFouthSection}>
        <div className={style.generalContainerFouthSectionText}>
            <div>
                <p className={style.firstParagraph}>Veja em 3 passos como nosso trabalho <span> realmente<br/> funciona!</span></p>
            </div>
            <div>
                <p>Não se engane pensando que sua presença online não é importante</p>
            </div>
            <div>
                <p className={style.thirdParagraph}><span>Se você não estiver à vista de seus clientes,</span> está perdendo oportunidades incríveis de negócios!</p>
            </div>
        </div>
        <div>
        <div className={style.containerNumerosTexts}>
            <div className={style.containerNumeros}>

                <img className={style.imageNumeros} src={numeros} alt="" />
            </div>

            <div className={style.containerNumerosText}>
                <div className={style.containerInsideNumerosText}>
                    <p className={style.paragraphNumeros}> <span className={style.spanNumeros}>Presença estratégica <br/></span>Você chegou nesta página através de um de nossos anúncio e agora é um lead em potencial para nós</p>
                    <p className={style.paragraphNumeros}><span className={style.spanNumeros}>Know-how e constante análises de dados<br/></span>Nossa comunicação foi toda planjeda para te fazer clicar em algum botão, isso se chama “conversão”</p>
                    <p className={style.paragraphNumeros}><span className={style.spanNumeros}>Crescismento planejado<br/></span>Vamos replicar para o seu negócio a mesma estratégia que utilizamos para nós e nos dez faturar muito dinheiro</p>
                </div>
                <div>
                
            </div>
            </div>
            
        </div>
        <div className={style.containerCtaFourthSection}>
        <button className={style.buttonCtaFourthSection}>Quero Transformar o meu Negócio!</button>

        </div>
        </div>

        </div>
    </div>
  )
}

export default FouthSection