// import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
  const HeaderStyles = {
    color: textColor,
    backgroundColor: bgColor,
  }
  return (
    <header style={HeaderStyles}>
      <div className="container">
        <h3>{text}</h3>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'FeedBack UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
}
// Header.prototype = {
//   text: PropTypes.string,
// }
export default Header
