import React from 'react'
 import styles from '@/styles/input.module.css'
export default function Input(props) {


  return (
    <>
      <label>
        {props.label && props.label}
        <input className={styles.input} type={props.type} placeholder={props.placeholder} name={props.name} />
      </label>
    </>
  )
}

export function Input1(props) {


  return (
    <>
      <label>
        {props.label && props.label}
        <input className={styles.input1} type={props.type} placeholder={props.placeholder} name={props.name} />
      </label>
    </>
  )
}
