import Title from "./Title"

const Info = () => {
  return (
    <div className="content">
      <Title>Info</Title>
      <ul>
        <li>The cryptosystem encrypts and decrypts plaintext Symmetric algorithms</li>
        <li>Plaintext must only consists of alphanumeric characters, blank space and these following symbols ,.-:'?</li>
        <li>Key will be auto generated for you</li>
      </ul>
    </div>
  )
}

export default Info