import React from 'react'

export default function Input(props) {


  return (
    <>
      <label>
        {props.label && props.label}
        <input style={{ width: props.width }} className="input" type={props.type} placeholder={props.placeholder} name={props.name} />
      </label>

    </>
  )
}
