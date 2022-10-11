import useDecrypt from "../../hooks/useDecrypt"

import Title from "../Title"
import TextAreaGroup from "./TextAreaGroup"

const DecryptForm = () => {
  const { plainText, key, cipherText, onCipherTextChange, onKeyChange, startDecrypt } = useDecrypt()

  const decrypt = (e) => {
    e.preventDefault()
    startDecrypt()
  }

  return (
    <div className="column">
      <Title>Decrypt</Title>

      <TextAreaGroup 
        id="cipherText" 
        label="Ciphertext *"
        placeholder="Encrypted message"
        value={cipherText} 
        setValue={onCipherTextChange}
        onChange={(e) => onCipherTextChange(e.target.value)}
        required
      />

      <TextAreaGroup 
        id="key" 
        label="Key *" 
        placeholder="The auto-generated key when you encrypt the original message"
        value={key}
        setValue={onKeyChange}
        onChange={(e) => onKeyChange(e.target.value)}
        required
      />

      <button 
        type="button"
        className="button is-small is-success"
        style={{ marginBottom: "1rem" }}
        onClick={decrypt}
      >
        Decrypt
      </button>

      <TextAreaGroup 
        id="plaintText" 
        label="Plaintext" 
        placeholder="Decrypted message"
        value={plainText}
        readOnly
        showClearButton={false}
      />
    </div>
  )
}

export default DecryptForm