import React from 'react'
import styles from './Header.module.css'
import logoCollabora from '../home.svg'
function Header() {
  return (
    <div className={styles.containerHeaderGeneral}>
<div className={styles.containerHeaderGeneralInside}>
      <div className={styles.containerHeader}>
      <img className={styles.collaboraLogo} src={logoCollabora} alt="" />
        <button className={styles.CtaHeaderButton} >Comecar Agora</button>
      
      </div>

<div className={styles.linearGradientContainer}>
<div className={styles.linearGradient}></div>

</div> 
</div>
    </div>
  )
}

export default Header