import PropTypes from 'prop-types'

function BookApp({ children, version }) {
  return (
    <div className={`book-app ${version}`}>
      {children}
    </div>
  )
}

BookApp.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
}
BookApp.defaultProps = {
    version: 'book-app mg-t mg-b'
}

export default BookApp
