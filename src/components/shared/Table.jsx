import PropTypes from 'prop-types'
function Table({children, className}) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

Table.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

Table.defaultProps = {
    className: 'table'
}
export default Table
