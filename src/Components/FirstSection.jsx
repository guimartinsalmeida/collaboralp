import React from 'react'
import style from './FirstSection.module.css'
function FirstSection() {
  return (
    <div className={style.firstSectionGeneralContainer}>
        <div className={style.firstSectionMainTextContainer}>
            <p className={style.firstSectionMainTextParagraph}>Colocamos <span>dinheiro</span> no seu bolso</p>
        </div>
        <div className={style.firstSectionMainTextContainerSubtitle}>
            <p>Nossa estratégia é uma verdadeira máquina de vendas.</p>
            <p className={style.firstSectionMainTextContainerSubtitleBlue}>Quer saber se a nossa solução é para você?</p>
        </div>
        <div className={style.firstSectionContainerCTA}>
            <a href='https://forms.zohopublic.com/collabora/form/hotlead/formperma/z4ma0moqGcjW96SXz6NJfXhOFiu56ipHvX_SlRzBBJg'>
            <button className={style.firstSectionCTA}>
                Descubra Agora!
            </button>
            </a>
        </div>
    </div>
  )
}

export default FirstSection