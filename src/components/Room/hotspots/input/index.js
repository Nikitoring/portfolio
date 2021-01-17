import './inputHot.scss'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
const InputHot = (props) => {
  const [checked] = useState(props.isChecked)
  const hints = useSelector((state) => state.achives.hints)
  const dispatch = useDispatch()
  const setChecked = () => {
    let newHints = [...hints]
    newHints.map((item) => {
      if (item.id === props.id) {
        item.isChecked = !checked
      }
      return item
    })
    dispatch({
      type: 'SET_HINTS',
      payload: newHints,
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
        checked={checked}
        onChange={() => setChecked(checked)}
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
