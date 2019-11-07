import React from 'react';
import cx from 'classnames';
import 'remixicon/fonts/remixicon.css'

const defaultProps = {
  set: 'remixicon',
  style: 'fill',
};

function Icon(props) {
  const { className, set, name, style } = props;
  if (!(set && name && style)) return null;
  const _className = cx(
    className,
    'Icon',
    `${set}-${name}-${style}`,
  );
  return <i className={_className} />;
}

Icon.defaultProps = defaultProps;

export default Icon;
