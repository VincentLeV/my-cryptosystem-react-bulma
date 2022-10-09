import Title from "./Title"
import TextAreaGroup from "./TextAreaGroup"

const DecryptForm = () => {
  return (
    <div className="column">
      <Title>Decrypt</Title>
      <TextAreaGroup 
        id="test"
        label="Test"
      />
    </div>
  )
}

export default DecryptForm