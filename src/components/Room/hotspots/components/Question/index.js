import './question.scss'
import React, { useEffect, useState, useCallback } from 'react'

import { useSelector, useDispatch } from 'react-redux'
const QuestionComponent = (props) => {
  const { content, closeDialog } = props
  const [variants, setVariants] = useState([])
  const [choice, setChoice] = useState(null)
  const health = useSelector((state) => state.health.health)
  const dispatch = useDispatch()
  const shuffleVariants = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  const checkedVariant = useCallback(
    (event) => {
      if (
        event.target.value &&
        Number(event.target.value) === content.trueAnswer
      ) {
        setChoice(<div className="rightChoice">Right choice!</div>)
      } else {
        setChoice(
          <div className="badChoice">
            You missed!<div>You lost one sherlok</div>
          </div>,
        )
        dispatch({
          type: 'SET_MISTAKE',
          payload: health + 1,
        })
      }
    },
    [content.trueAnswer, dispatch, health],
  )

  useEffect(() => {
    if (content.variants && content.variants.length && !choice) {
      let shuffleArray = shuffleVariants(content.variants)

      if (shuffleArray && shuffleArray.length) {
        setVariants(
          shuffleArray.map((variant) => (
            <div key={variant.id} className="variant">
              <input
                type="radio"
                id={`${content.title}-${variant.id}`}
                name="select"
                value={variant.id}
                onChange={(event) => checkedVariant(event)}
              />
              <label
                className="labelVariant"
                htmlFor={`${content.title}-${variant.id}`}
              >
                <p>{variant.value}</p>
              </label>
            </div>
          )),
        )
      }
    }
  }, [content, setVariants, checkedVariant,choice])

  return (
    <div>
      <div className="modalContent">
        <div className="hint-title">{content.title}</div>
        <div className="hint-body">{content.body}</div>
        <div className="variantsBlock">{variants}</div>
        {choice && (
          <div className="choiceModal">
            <span
              className="close-button"
              onClick={() => {
                closeDialog()
              }}
            >
              &#10005;
            </span>
            {choice}
          </div>
        )}
      </div>
    </div>
  )
}

export default QuestionComponent
