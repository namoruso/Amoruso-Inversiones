import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium',
  className = '',
  ...props 
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="btn-text">{children}</span>
      <span className="btn-shine"></span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string
};

export default Button;
