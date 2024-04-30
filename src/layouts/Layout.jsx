import React from 'react'
import Header from '../components/header/Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer.jsx'
import styles from './Layout.module.css'

export default function Layout() {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
