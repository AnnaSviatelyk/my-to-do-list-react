import React, { useEffect, useRef } from 'react'
import './Tasks/Task.scss'
const maxTextAreaHeight = 100
const spanHeightWithOneLine = 37

const InputAndBtns = ({ value, spanHeight, change, closeTextArea }) => {
    const textAreaRef = useRef(null)
    let className = value ? '' : 'task__edit-input-text--invalid'

    useEffect(() => {
        let nextHeight = Math.min(maxTextAreaHeight, spanHeight)
        const textAreaPaddingTop = parseFloat(window.getComputedStyle(textAreaRef.current, null).getPropertyValue('padding-top'))
        textAreaRef.current.style.height = nextHeight + (2 * textAreaPaddingTop) + 'px'
        console.log(textAreaRef.current.scrollHeight)

        if (value) {
            textAreaRef.current.rows = 1
            textAreaRef.current.style.height = 'auto'
            nextHeight = Math.min(maxTextAreaHeight, textAreaRef.current.scrollHeight)
            textAreaRef.current.style.height = nextHeight + 'px'
        } else {
            textAreaRef.current.style.height = spanHeightWithOneLine + 'px'
        }

    }, [value, spanHeight])

    const keyPressHandler = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            if (event.target.value !== '') {
                closeTextArea()
            }
        }
    }

    return (
        <textarea className={`task__edit-input-text ${className}`} type="text" autoFocus ref={textAreaRef} onChange={change} onKeyDown={keyPressHandler} value={value} />
    )

}


export default InputAndBtns