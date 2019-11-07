import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import 'remixicon/fonts/remixicon.css';

const propTypes = {
  className: PropTypes.string,
  set: PropTypes.string,
  name: PropTypes.string.isRequired,
  style: PropTypes.string,
};

const defaultProps = {
  className: undefined,
  set: 'remixicon',
  style: 'fill',
};

function Icon(props) {
  const {
    className, set, name, style,
  } = props;
  if (!(set && name && style)) return null;
  const classname = cx(
    className,
    'Icon',
    `${set}-${name}-${style}`,
  );
  return <i className={classname} />;
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
