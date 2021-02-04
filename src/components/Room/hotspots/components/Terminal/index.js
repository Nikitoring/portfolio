import './terminal.scss'
import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
const TerminalComponent = (props) => {
  const [terminalValue, setTerminalValue] = useState('') // NameInput
  const [nameInfo, setNameInfo] = useState(null) // Name user
  const [answer, setAnswer] = useState('') // Answer who invented
  const [complete, setcomplete] = useState(false) // If answer true
  const [isExit, setIsExit] = useState(false) // if exit command
  const [mistake, setMistakes] = useState(null)
  const hints = useSelector((state) => state.achives.hints)
  const health = useSelector((state) => state.health.health)
  const dispatch = useDispatch()

  const refTerminalInput = React.useRef() // ref for 1 input terminalValue
  const refTerminalInput1 = React.useRef() // ref for 2 input answer
  const refTerminalInput2 = React.useRef() // ref for 3 input exit
  useEffect(() => {
    // Insert cursor in first input
    if (refTerminalInput.current && nameInfo === null) {
      setTimeout(() => {
        if (refTerminalInput.current && refTerminalInput.current.focus()) refTerminalInput.current.focus()
      }, 500)
    }
    //Watcher for Enter name input
    if (refTerminalInput.current) {
      refTerminalInput.current.addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
          setNameInfo(terminalValue)
          setTerminalValue('')

          if (refTerminalInput1.current) {
            refTerminalInput.current.readOnly = true
            refTerminalInput1.current.focus()
          }
        }
      })
    }
    //Watcher for Enter exit input
    if (refTerminalInput2.current) {
      refTerminalInput2.current.addEventListener('keyup', (event) => {
        if (event.keyCode === 13 && event.target.value === 'exit') {
          props.closeDialog()
        }
      })
    }
    const unscrube = () => {
      if (
        refTerminalInput.current &&
        refTerminalInput2.current
      ) {
        refTerminalInput.current.removeEventListener('keyup', () => {})
        refTerminalInput2.current.removeEventListener('keyup', () => {})
      }
    }
    return () => unscrube()
  }, [
    nameInfo,
    refTerminalInput,
    refTerminalInput2,
    isExit,
    terminalValue,
    props,
    answer,
    dispatch,
    health
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
  const setPressButton =(event) => {
    if (event.keyCode === 13 || event.key === 'Enter') {
      if ( (Number(answer) && Number(answer) === 3) || answer === '3') {
        setMistakes(
          <div className="terminal-text complete-text">Correct answer</div>,
        )

      } else if (answer !== '' || answer !==null) {
        setMistakes(
          <div className="terminal-text mistake-text">
            You lost one sherlok
          </div>,
        )
        dispatch({
          type: 'SET_MISTAKE',
          payload: health+1
        })
      }
      setcomplete(true)
      if (refTerminalInput2.current) {
        refTerminalInput1.current.readOnly = true
        refTerminalInput2.current.focus()
      }
    }
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
            Please click on the line below, enter your name and press Enter
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
              <div className="terminal-text-variant">1 - Bill Gates </div>
              <div className="terminal-text-variant">2 - Justin Bieber </div>
              <div className="terminal-text-variant">3 - Linus Torvalds </div>
              <div className="terminal-text-variant">4 - Vladimir Putin </div>
              <div className="terminal-text-info">
                Please, enter the correct number below and press "Enter"{' '}
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
                  onChange={(event) => setAnswer(event.target.value)}
                  onKeyDown={(event)=> setPressButton(event)}
                ></input>
              </div>
            </div>
          )}
          {complete && (
            <div>
              {mistake}
              <div className="terminal-text-info">
                Please, press close button or enter command "exit" on the line
                below and press "Enter"{' '}
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
