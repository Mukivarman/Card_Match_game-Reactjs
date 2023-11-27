import React, { useEffect, useState } from "react";
import styles from './Header.module.css'
import IconRender from "./IconRender";



const Gameicons=[
{path:'/src/assets/facebook.svg'},
{path:'/src/assets/insta.svg'},
{path:'/src/assets/telegram.svg'},
{path:'/src/assets/youtube.svg'},
{path:'/src/assets/whatsapp.svg'},
{path:'/src/assets/twitter.svg'},
]

export default function Content(){
 
  const [FirstMove,setFirstMove]=useState(null)
  const[NextMove,setNextMove]=useState(null)
  const [LastMove,setLastmove]=useState(null)
  const[count,setcount]=useState(0)

  const [icons,seticons]=useState([]);
    const Btn =(props)=><button onClick={props.func}>{props.text}</button>

    const  loadgame=()=>{

      const loadicons=[...Gameicons,...Gameicons].sort(()=>Math.random()-0.5)
      .map((item)=>({...item,id:Math.random(),state:false}))
      seticons(loadicons)
      console.log(loadicons)
      
    }

    
    const imgclick=(path)=>{

      FirstMove===null?setFirstMove(path):setNextMove(path)
     if(FirstMove!=null&&NextMove!=null){
      
     }
     
  }
 const resetmove=()=>{
  FirstMove.state=true
  NextMove.state=true
  setFirstMove(null)
  setNextMove(null)
  setcount(count+1)
  
 }
 useEffect(()=>{
  
  console.log(count)

 },[count])

useEffect(()=>{
  if(FirstMove&&NextMove){
    if(FirstMove.path===NextMove.path&&FirstMove.id!=NextMove.id){
      console.log('matched')
      resetmove()
    }
    else{
      console.log("not matched")
      
      if (NextMove!=null){
        setLastmove(FirstMove)
        setFirstMove(NextMove)
      setNextMove(null)
      }
      
    }
    if(LastMove!=null){
      LastMove.state=false 
    }
  }
},[FirstMove,NextMove,LastMove])


  return (
    <div className={styles.content}>
      <h1  className={styles.contenttitle}>Match Icons Game</h1>
      <Btn text='New Game' func={loadgame}/>
      <section className={styles.game}>
     
      <section  className={styles.gridboard}>
       {icons.map((icon)=>(
       
        <IconRender key={icon.id}  card={icon} clicked={imgclick}/>
       )) }
       
      

      </section>
      </section>
      
    </div>
    )
}