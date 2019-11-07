import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Box from '../box';
import './index.css';

const propTypes = {
  className: PropTypes.string,
  shadow: PropTypes.string,
  radius: PropTypes.string,
  background: PropTypes.string,
  children: PropTypes.any,
};

const defaultProps = {
  className: undefined,
  shadow: 'small',
  radius: 'all',
  background: 'white',
};

function Card(props) {
  const {
    className, shadow, radius, children, ...rest
  } = props;
  const classname = cx(
    className,
    'Card-root',
    {
      [`Card-shadow--${shadow}`]: shadow,
      [`Card-radius--${radius}`]: radius,
    },
  );

  return (
    <Box className={classname} {...rest}>
      {children}
    </Box>
  );
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
