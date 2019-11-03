import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Padding from '../padding';
import Flex from '../flex';
import './index.css';

const propTypes = {
  className: PropTypes.string,
  padding: PropTypes.object,
  flex: PropTypes.object,
  background: PropTypes.string,
  divider: PropTypes.string,
  children: PropTypes.any,
};

const defaultProps = {
  className: undefined,
  padding: {},
  flex: {},
  background: undefined,
  divider: undefined,
  children: undefined,
};

function Box(props) {
  const {
    className, padding, flex, background,
    divider, children,
  } = props;
  const classname = cx(
    className,
    'Box-root', {
      [`Box-background--${background}`]: background,
      [`Box-divider--${divider}`]: divider,
    },
  );
  const item = (
    <div className={classname}>
      {children}
    </div>
  );

  return (
    <Padding {...padding}>
      {flex ? <Flex {...flex}>{item}</Flex> : item}
    </Padding>
  );
}

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

export default Box;
