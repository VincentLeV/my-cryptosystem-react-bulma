const Title = ({ children, ...props }) => {
  return (
    <h1 className="title is-4" {...props} style={{ lineHeight: 0.5 }}>
      {children}
    </h1>
  )
}

export default Title