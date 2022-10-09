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

      <div className="column is-one-third">
        <button 
          type="button" 
          className="button is-small is-link"
          onClick={copyInput}
          style={{ margin: "2rem 0.8rem 0.5rem 0" }}
        >
          Copy
        </button>
        {
          showClearButton && (
            <button 
              type="button" 
              className="button is-small is-light"
              onClick={clearInput}
              style={{ margin: "2rem 0 0.5rem 0" }}
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