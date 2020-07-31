import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './EditBtnInput.scss'

const maxTextAreaHeight = 100
const spanHeightWithOneLine = 37

const InputAndBtns = ({ value, spanHeight, change, closeTextArea }) => {
    const textAreaRef = useRef(null)
    let className = value ? '' : 'input__edit-input-text--invalid'

    useEffect(() => {
        let nextHeight = Math.min(maxTextAreaHeight, spanHeight)
        const textAreaPaddingTop = parseFloat(window.getComputedStyle(textAreaRef.current, null).getPropertyValue('padding-top'))
        textAreaRef.current.style.height = nextHeight + (2 * textAreaPaddingTop) + 'px'

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
        const isEnter = event.keyCode === 13
        if (isEnter) {
            event.preventDefault();
            if (event.target.value.length > 0) {
                closeTextArea()
            }
        }
    }

    return (
        <textarea
            className={`input__edit-input-text ${className}`}
            type="text"
            autoFocus
            ref={textAreaRef}
            onChange={change}
            onKeyDown={keyPressHandler}
            value={value} />
    )

}

InputAndBtns.propTypes = {
    value: PropTypes.string,
    spanHeight: PropTypes.number,
    change: PropTypes.func,
    closeTextArea: PropTypes.func
}

export default InputAndBtns