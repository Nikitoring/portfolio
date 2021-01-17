import './inputHot.scss'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
const InputHot = (props) => {

  const hints = useSelector((state) => state.achives.hints)
  const dispatch = useDispatch()
  const setChecked = () => {
    dispatch({
      type: 'SET_HINTS',
      payload: hints.map((item) => {
        if (item.id === props.id) {
          item.isChecked = !item.isChecked
        }
        return item
      }),
    })
    console.log(hints)
  }
  useEffect(()=> {

  })
  return (
    <div>
      <input
        type="checkbox"
        className="input"
        id={props.id}
        name="inputs"
        checked={props.isChecked}
        onChange={() => setChecked()}
      />
      <label htmlFor={props.id}>
        <div id={`b-${props.id}`} className="button">
          {props.label}
        </div>
      </label>
    </div>
  )
}

export default InputHot
