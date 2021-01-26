import './terminal.scss'
import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
const TerminalComponent = (props) => {
  const [terminalValue, setTerminalValue] = useState('') // NameInput
  const [nameInfo, setNameInfo] = useState(null) // Name user
  const [answer, setAnswer] = useState('') // Answer who invented
  const [complete, setcomplete] = useState(false) // If answer true
  const [isExit, setIsExit] = useState(false) // if exit command

  const hints = useSelector((state) => state.achives.hints)
  const dispatch = useDispatch()

  const refTerminalInput = React.createRef() // ref for 1 input terminalValue
  const refTerminalInput1 = React.createRef() // ref for 2 input answer
  const refTerminalInput2 = React.createRef()// ref for 3 input exit
  useEffect(() => {
    refTerminalInput.current.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        setNameInfo(terminalValue)
        setTerminalValue('')
        if (nameInfo && nameInfo.length && refTerminalInput1.current) {
          refTerminalInput1.current.focus()
        }
      }
    })
    if (refTerminalInput1.current) {
      refTerminalInput1.current.addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
          if (Number(answer) && Number(answer) !== 3) {
            alert('Erorr')
          } else {
            setcomplete(true)
          }
        }
      })
    }
    if (refTerminalInput2.current) {
      refTerminalInput2.current.addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
          props.closeDialog()
        }
      })
    }
    const unscrube =() => {
      refTerminalInput.current.removeEventListener('keyup', () => {})
      refTerminalInput1.current.removeEventListener('keyup', () => {})
      refTerminalInput2.current.removeEventListener('keyup', () => {})
    }
    return  () => unscrube()
  }, [
    nameInfo,
    refTerminalInput,
    refTerminalInput1,
    refTerminalInput2,
    isExit,
    terminalValue,
    props,
    answer,
  ])
  const closeDialog = () => {
    props.closeDialog()
    dispatch({
      type: 'SET_HINTS',
      payload: hints.map((item) => {
        if (item.id === props.id) {
          item.terminalValue = terminalValue
        }
        return item
      }),
    })
  }
  const setTerminal = (event) => {
    setTerminalValue(event.target.value)
  }
  const setAnswerFunc = (event) => {
    setAnswer(event.target.value)
  }
  const setClose = (event) => {
    if (event.target.value === 'exit') {
      setIsExit(!isExit)
    }
  }
  return (
    <div className="forTerminal">
      <div className="terminal">
        <section className="terminal-bar">
          <div className="terminal-buttons">
            <button className="termina-btn exit" onClick={() => closeDialog()}>
              &#10005;
            </button>
            <button className="termina-btn">&#9472;</button>
            <button className="termina-btn">&#9723;</button>
          </div>
          <p className="terminal-bar-user">user@ubuntu</p>
        </section>
        <section className="terminal-body">
          <div className="terminal-text">Welcome to Ubuntu</div>
          <div className="terminal-text-info">
            Please click on the line bellow, enter your name and press Enter
          </div>
          <div className="terminal-propmpt">
            <span className="propmpt-user">user@ubuntu:</span>
            <span className="propmpt-tilda">~</span>
            <span className="propmpt-dollar">$</span>
            <input
              ref={refTerminalInput}
              className="propmpt-input"
              value={terminalValue}
              type="text"
              onChange={(event) => setTerminal(event)}
            ></input>
          </div>
          {nameInfo && (
            <div>
              <div className="terminal-text">Welcome, {nameInfo}</div>
              <div className="terminal-text-question">
                Who invented this OS?
              </div>
              <div className="terminal-text-variant">1 - Bill Gaits </div>
              <div className="terminal-text-variant">2 - Eminem </div>
              <div className="terminal-text-variant">3 - Linus Torvalds </div>
              <div className="terminal-text-variant">4 - Vladimir Putin </div>
              <div className="terminal-text-info">
                Please, enter the correct number bellow and press "Enter"{' '}
              </div>
              <div className="terminal-propmpt">
                <span className="propmpt-user">user@ubuntu:</span>
                <span className="propmpt-tilda">~</span>
                <span className="propmpt-dollar">$</span>

                <input
                  ref={refTerminalInput1}
                  className="propmpt-input"
                  value={answer}
                  type="text"
                  onChange={(event) => setAnswerFunc(event)}
                ></input>
              </div>
            </div>
          )}
          {complete && (
            <div>
              <div className="terminal-text">Correct answer</div>
              <div className="terminal-text-info">
                Please, press close button or enter command "exit" on the line
                bellow and press "Enter"{' '}
              </div>
              <div className="terminal-propmpt">
                <span className="propmpt-user">user@ubuntu:</span>
                <span className="propmpt-tilda">~</span>
                <span className="propmpt-dollar">$</span>

                <input
                  ref={refTerminalInput2}
                  className="propmpt-input"
                  type="text"
                  onChange={(event) => setClose(event)}
                ></input>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default TerminalComponent
