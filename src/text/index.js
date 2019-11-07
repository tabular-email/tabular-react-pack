import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { convertPropsToClassName } from '../../helpers';
import './index.css';

const propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.string,
  typeface: PropTypes.string,
  wrap: PropTypes.string,
};

const defaultProps = {
  color: 'default',
  fontSize: 14,
  fontWeight: 'regular',
  lineHeight: '20',
  typeface: 'base',
  wrap: 'wrap',
};

function Text(props) {
  const { className, children, ...rest } = props;
  const _className = cx(
    className,
    'Text',
    convertPropsToClassName(rest, 'Text'),
  );

  return (
    <span className={_className}>
      {children}
    </span>
  );
}

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
