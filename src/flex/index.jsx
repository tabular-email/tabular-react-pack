import React from 'react';
import cx from 'classnames';
import convertPropsToClassName from '../helpers';
import './index.css';

const defaultProps = {
  type: 'flex',
};

function Flex(props) {
  const {
    className, type, children, ...rest
  } = props;
  const classname = cx(
    className,
    `Flex-${type}`,
    convertPropsToClassName(rest, 'Flex'),
  );
  const child = React.Children.only(children);

  return React.cloneElement(
    child,
    {
      className: cx(child.props.className, classname),
    },
  );
}

Flex.defaultProps = defaultProps;

export default Flex;
