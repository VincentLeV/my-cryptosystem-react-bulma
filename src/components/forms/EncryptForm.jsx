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
        placeholder="Original message contains only alphanumeric character, blank space and and these following symbols ,.-:'?"
        required
        value={plainText}
        setValue={onPlainTextChange}
        onChange={(e) => onPlainTextChange(e.target.value)}
      />

      <TextAreaGroup 
        id="key" 
        label="Key" 
        placeholder="Auto-generated for you"
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
        placeholder="Generated encrypted message"
        value={cipherText}
        readOnly
        showClearButton={false}
      />
    </div>
  )
}

export default EncryptForm