import React from "react";
import styles from './Header.module.css'

export default function Header(){
return(
    <div className={styles.header}>
    <h1 className={styles.sitename}>Match Cards </h1>
    <ul className={styles.nav}>
      <li><a href="">Home</a></li>
      <li><a href="">How to Play</a></li>
      <li><a href="">Help</a></li>
      <li><a href="">About Us</a></li>
    </ul>
   </div>
)
}