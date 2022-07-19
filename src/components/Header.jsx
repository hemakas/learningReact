function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor, 
    color: textColor
  }
  
  return (
    <header style={ headerStyles }>
        <div className="container">
            <h1>{ text }</h1>
            <hr></hr>
        </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Default Prop'
}

export default Header