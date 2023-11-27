import React, { useEffect, useState } from "react";
import styles from './Header.module.css'

export default function IconRender({card,clicked}){

   

    const Showimg=()=>{
   clicked(card)
     card.state=true

    }
   

   
return(
    <section className={card.state?styles.changegamesection:styles.gamesection} >
    <img src={card.path} className={card.state?styles.after:styles.before} onClick={Showimg}></img>
   </section>
   )

}