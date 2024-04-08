import React from 'react'
import styles from './Input.module.css'
function Input({ id, name, type, maxLength, value, onChange, error }) {
  return (
    <div>
      <label htmlFor={id}>{name}</label>
        <br />
        <input
          className={styles.input}
          type={type}
          maxLength={maxLength}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
        {error && <p className={styles.error}>{error}</p>}
        <br />
    </div>
  )
}

export default Input
