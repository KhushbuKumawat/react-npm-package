import React from 'react';
import PropTypes from 'prop-types';

const getButtonStyles = ({ size, color, fullWidth, loading }) => {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    userSelect: 'none',
    position: 'relative',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: color === 'primary' ? '#007bff' : '#6c757d',
    color: '#fff',
    ...(fullWidth && { width: '100%' }),
    ...(size === 'sm' && { padding: '0.25rem 0.5rem', fontSize: '0.75rem' }),
    ...(size === 'lg' && { padding: '0.75rem 1.5rem', fontSize: '1.25rem' }),
  };

  const loadingStyles = loading ? { color: 'transparent' } : {};

  return { ...baseStyles, ...loadingStyles };
};

const Button = ({
  children,
  color = 'primary',
  size = 'md',
  fullWidth = false,
  startDecorator,
  endDecorator,
  loading = false,
  loadingIndicator,
  ...props
}) => {
const styles = getButtonStyles({ size, color, fullWidth, loading });

  return (
    <button
      className="btn"
      style={styles}
      {...props}
    >
      {startDecorator && <span className="btn-decorator start">{startDecorator}</span>}
      {loading && loadingIndicator && <span className="btn-decorator loading">{loadingIndicator}</span>}
      {children}
      {endDecorator && <span className="btn-decorator end">{endDecorator}</span>}
    </button>
  );
};

// Prop types validation
Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  fullWidth: PropTypes.bool,
  startDecorator: PropTypes.node,
  endDecorator: PropTypes.node,
  loading: PropTypes.bool,
  loadingIndicator: PropTypes.node,
  ...PropTypes.object, // Allows for other props to be passed
};

export default Button;
