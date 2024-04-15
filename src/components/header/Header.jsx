import React from 'react'
import styles from './Header.module.css'
import dropdown from '../../svg/drop-down.svg'
function Header() {
  return (
    <div>
      <header className={styles.header}>
  <div className={styles.header_content}>
    <div className={styles.logo}>
      <img src="onextrapixel.webp" alt="page icon" />
      <img src="" alt="" />
    </div>
    <nav className={styles.menu}>
      <ul>
        <li>
          <a href="#">
            CATEGORIES
            <span ><img src={dropdown} alt="" width={10}/></span>
          </a>
        </li>
        <li>
          <a href="#">
            DEALS
            <span ><img src={dropdown} alt="" width={10}/></span>
          </a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">ADVERTISE</a>
        </li>
      </ul>
    </nav>
  </div>
</header>
    </div>
  )
}

export default Header
