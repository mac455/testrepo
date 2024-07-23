import React from 'react'
import styles from './header.module.css'
import ToDoLogo from '../../assets/ToDoLogo.png'



export default function Header() {
  return (
   <header className={styles.header}>
    <img src={ToDoLogo}/>
    <form className={styles.newtask}>
      <input placeholder='What would you like to do?' type='text'/>
      <button>
        New Task
      </button>
    </form>
   </header>
  )
}
