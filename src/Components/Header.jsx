import React from 'react'
import styles from './Header.module.css'
import logoCollabora from '../home.svg'
function Header() {
  return (
    <div className={styles.containerHeaderGeneral}>
<div className={styles.containerHeaderGeneralInside}>
      <div className={styles.containerHeader}>
      <img className={styles.collaboraLogo} src={logoCollabora} alt="" />
      <a href='https://forms.zohopublic.com/collabora/form/hotlead/formperma/z4ma0moqGcjW96SXz6NJfXhOFiu56ipHvX_SlRzBBJg'>

        <button className={styles.CtaHeaderButton} >Começar Agora</button>
      </a>
      </div>

<div className={styles.linearGradientContainer}>
<div className={styles.linearGradient}></div>

</div> 
</div>
    </div>
  )
}

export default Header