import React from 'react';
import cx from 'classnames';
import './index.css';

function Padding(props) {
  const {
    className, all, top, bottom, right, left,
    vertical, horizontal, children, ...rest
  } = props;
  const classname = cx(
    className,
    {
      [`Padding-all--${all}`]: all,
      [`Padding-top--${top}`]: top,
      [`Padding-right--${right}`]: right,
      [`Padding-bottom--${bottom}`]: bottom,
      [`Padding-left--${left}`]: left,
      [`Padding-vertical--${vertical}`]: vertical,
      [`Padding-horizontal--${horizontal}`]: horizontal,
    },
  );
  const child = React.Children.only(children);

  return React.cloneElement(
    child,
    {
      className: cx(child.props.className, classname),
      ...rest,
    },
  );
}

export default Padding;
