import React from 'react'
import styles from './Header.module.css'
import dropdown from '../../svg/drop-down.svg'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
      <header className={styles.header}>
  <div className={styles.header_content}>
    <div className={styles.logo}>
      <img src="/onextrapixel.webp" alt="page icon" />
      <img src="" alt="" />
    </div>
    <nav className={styles.menu}>
      <ul>
        <li>
          <Link to='/blogs'>
            BLOGS
            <span ><img src={dropdown} alt="" width={10}/></span>
          </Link>
        </li>
        <li>
          <Link to='/addBlog'>
            ADD NEW BLOG
            <span ><img src={dropdown} alt="" width={10}/></span>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
</header>
    </div>
  )
}

export default Header
