import './inputHot.scss'
import React, { useEffect, useState } from 'react'

const InputHot = (props) => {
  return (
    <div>
      <input type="checkbox" className="input" id={props.id} name="inputs" />
      <label htmlFor={props.id}>
        <div id={`b-${props.id}`} className="button">
          {props.label}
        </div>
      </label>
    </div>
  )
}

export default InputHot
