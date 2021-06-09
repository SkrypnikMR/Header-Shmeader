import React from 'react'
import classes from './Input.css'

const Input = props => {
  const cls = [classes.Input]

  return(
    <div className={cls.join(' ')}>
      <label>{props.label}</label>
      <input 
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
      <span>{props.errorMessage}</span>
    </div>
  )
}

export default Input