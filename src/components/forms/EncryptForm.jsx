import { useState } from "react"
import useEncrypt from "../../hooks/useEncrypt"

import Title from "./Title"
import TextAreaGroup from "./TextAreaGroup"

const EncryptForm = () => {
  // const [ plainTextInput, setPlainTextInput ] = useState("")
  // const [ keyStr, setKeyStr ] = useState([])
  const { plainText, onPlainTextChange, key, generateKey, cipherText, shiftedBoard, setShiftedBoard, shiftValue, setShiftValue } = useEncrypt()
console.log(plainText)
console.log(key)
console.log(shiftedBoard)
console.log(shiftValue)
  const encrypt = (e) => {
    e.preventDefault()
    // setPlainText(plainTextInput)
    // const keyAndBoard = generateKey()
    generateKey()
    // const keyStr = keyAndBoard?.key
    // setShiftedBoard(keyAndBoard?.shiftedBoard)
    // setShiftValue(keyAndBoard?.shiftValue)
    // setKeyStr(keyStr)
    // onKeyChange(keyStr)
  }

  return (
    <div className="column">
      <Title>Encrypt</Title>

      <TextAreaGroup 
        id="plaintText" 
        label="Plaintext *" 
        required
        value={plainText}
        setValue={onPlainTextChange}
        onChange={(e) => onPlainTextChange(e.target.value)}
      />

      <TextAreaGroup 
        id="key" 
        label="Key" 
        value={key}
        readOnly
        showClearButton={false}
      />

      <button 
        type="button"
        className="button is-small is-success"
        style={{ marginBottom: "1rem" }}
        onClick={encrypt}
      >
        Encrypt
      </button>

      <TextAreaGroup 
        id="cipherText" 
        label="Ciphertext" 
        value={cipherText}
        readOnly
        showClearButton={false}
      />
    </div>
  )
}

export default EncryptForm