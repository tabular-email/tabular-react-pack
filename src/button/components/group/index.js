import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Box from '../../../box';

const propTypes = {
  className: PropTypes.string,
  flex: PropTypes.object,
  rtl: PropTypes.bool,
  children: PropTypes.any,
};

const defaultProps = {
  className: undefined,
  flex: {
    justifyContent: 'flex-start',
  },
  rtl: false,
};

function Group(props) {
  const {
    className, flex, rtl, children,
  } = props;
  const classname = cx(
    className,
    'ButtonGroup',
    {
      rtl,
    },
  );

  return (
    <Box
      className={classname}
      flex={flex}
    >
      {children}
    </Box>
  );
}

Group.propTypes = propTypes;
Group.defaultProps = defaultProps;

export default Group;
