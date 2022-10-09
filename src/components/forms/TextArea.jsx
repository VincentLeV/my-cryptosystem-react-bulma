const TextArea = ({ id, label, children, ...props }) => {
  return (
    <div className="field">
      <div className="control">
        <label htmlFor={id} className="label">{label}</label>
        <textarea 
          className="textarea is-success is-small"
          type="textarea" 
          id={id}
          rows={4} 
          {...props}
        >
          {children}
        </textarea>
      </div>
    </div>
  )
}

export default TextArea