import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/register.module.css'
import boy_and_girl from './images/boy_and_girl_standing_and_laughing.png'
import young_people from './images/young people in casual clothes standing.png'

// young people in casual clothes standing.png
import { useState } from 'react'
import Input from '@/components/Input/input'
export default function Register(props) {
  const [toggle, setToggle] = useState(true)

  const Login_Input = [
    {
      id: 1,
      type: "text",
      placeholder: "Enter your email",
      name: "email",
      label: "Email",
    },
    {
      id: 2,
      type: "text",
      placeholder: "Password",
      label: "Password",
      name: "password",
    },
  ]


  const Inputs1 = [
    {
      id: 1,
      type: "text",
      placeholder: "Fullname",
      name: "fullname"
    },
    {
      id: 2,
      type: "text",
      placeholder: "Phone Number",
      name: "phone"
    },
  ]

  const Inputs2 = [
    {
      id: 3,
      type: "text",
      placeholder: "Age",
      name: "age",
      width: 220
    },
    {
      id: 4,
      type: "text",
      placeholder: "Sex",
      name: "sex",
      width: 220
    },
  ]

  const Inputs3 = [
    {
      id: 5,
      type: "text",
      placeholder: "Your School",
      name: "school",
    },
    {
      id: 6,
      type: "text",
      placeholder: "School Location (State)",
      name: "state",
    },
    {
      id: 7,
      type: "text",
      placeholder: "Create Password",
      name: "password",
    },
    {
      id: 8,
      type: "text",
      placeholder: "Confirm Password",
      name: "Confirm Password",
    }
  ]



  return (
    <div className={styles.register}>
      <div className={toggle ? styles.container : `${styles.container} ${styles.right_panel_active}`} >

        <div className={`${styles.form_container} ${styles.sign_up_container}`}>
          <form className={styles.form} onSubmit={(e) => {
            e.preventDefault()
          }}>
            <span className={styles.span}>
              <h1 className={styles.h1}>Create Account</h1>
              <p className={styles.p}>Please enter your details.</p>
            </span>
            {Inputs1.map((i) => (
              <Input {...i} />
            ))}
            <div className={styles.info}>
              {Inputs2.map((i) => (
                <Input {...i} />
              ))}
            </div>

            {Inputs3.map((i) => (
              <Input {...i} />
            ))}
            <button className={styles.button} >Sign Up</button>
            <span style={{ display: 'flex', gap: 5, marginTop: 10 }}>Already signed up?<p style={{ color: '#0277BD', cursor: 'pointer' }} onClick={() => setToggle(true)} >Log In</p></span>
          </form>
        </div>

        <div className={`${styles.form_container} ${styles.sign_in_container}`}>
          <form className={styles.form} onSubmit={(e) => {
            e.preventDefault()
          }} >
            <span className={styles.span}>
              <h1 className={styles.h1}>Log In</h1>
              <p className={styles.p}>Welcome Back! Please enter your details.</p>
            </span>
            {Login_Input.map((i) => (
              <Input {...i} />
            ))}
            <a href="#" class={styles.forgot_password}><i>Forgot your password?</i></a>
            <button className={styles.button}>Sign In</button>
            <span style={{ display: 'flex', gap: 5, marginTop: 10 }}>Don't have an account? <p style={{ color: '#0277BD', cursor: 'pointer' }} onClick={() => setToggle(false)} >Sign up</p></span>
          </form>
        </div>

        <div className={styles.overlay_container}>
          <div className={styles.overlay}>
            <div className={`${styles.overlay_panel} ${styles.overlay_left}`}>
              <Image
                src={boy_and_girl}
                width={400}
                height={500}
              />
            </div>

            <div className={`${styles.overlay_panel} ${styles.overlay_right}`}>
              <Image
                src={young_people}
                width={400}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}
