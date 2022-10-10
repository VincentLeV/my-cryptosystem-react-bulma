import TextArea from "./TextArea"

const TextAreaGroup = ({ 
  id, 
  label, 
  value, 
  setValue, 
  readOnly, 
  showClearButton = true, 
  ...props 
}) => {
  const copyInput = () => {
    navigator.clipboard.writeText(value)
  }

  const clearInput = () => {
    setValue("")
  }

  return (
    <form className="columns">
      <div className="column">
        <TextArea 
          id={id}
          label={label}
          value={value}
          readOnly={readOnly}
          {...props}
        />
      </div>

      <div className="column is-two-fifths">
        <label className="label column placeholder"></label>
        <button 
          type="button" 
          className="button is-small is-link"
          onClick={copyInput}
          style={{ marginRight: "0.8rem" }}
        >
          Copy
        </button>
        {
          showClearButton && (
            <button 
              type="button" 
              className="button is-small is-light"
              onClick={clearInput}
            >
              Clear
            </button>
          )
        }
      </div>
    </form>
  );
}

export default TextAreaGroup