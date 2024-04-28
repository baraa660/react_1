import React from 'react'
import styles from './Input.module.css'
import { useTranslation } from 'react-i18next';

function Input({ id, name, type, maxLength, value, onchange, errors, onblur, touched }) {

  const { t } = useTranslation();


  return (
    <div>
      <label htmlFor={id}>{t(name)}</label>
        <br />
        <input
          className={styles.input}
          type={type}
          maxLength={maxLength}
          id={id}
          name={name}
          value={value}
          onChange={onchange}
          onBlur={onblur}
        />
        {touched[name]&&errors[name]&&<p className={styles.error}>{t(errors[name])}</p>
        //error && <p className={styles.error}>{error}</p>
        }
        <br />
    </div>
  )
}

export default Input
