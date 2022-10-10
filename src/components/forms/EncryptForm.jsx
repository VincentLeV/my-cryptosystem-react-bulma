import useEncrypt from "../../hooks/useEncrypt"

import Title from "../Title"
import TextAreaGroup from "./TextAreaGroup"

const EncryptForm = () => {
  const { plainText, onPlainTextChange, key, cipherText, startEncrypt } = useEncrypt()

  const encrypt = (e) => {
    e.preventDefault()
    startEncrypt()
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