/* eslint-disable react/prop-types */
 import PropTypes from 'prop-types';

const Button = ({children , onclick}) => {
   
  return (
    <button onClick={onclick}> {children}</button>
  )
}
Button.propTypes = {
  children: PropTypes.node
}

export default Button