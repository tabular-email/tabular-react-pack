import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link, withRouter } from 'react-router-dom';
import Box from '../box';
import Icon from '../icon';
import Text from '../text';
import Group from './components/group';

const propTypes = {
  type: PropTypes.string,
  htmlType: PropTypes.string,
  expand: PropTypes.bool,
  size: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  external: PropTypes.bool,
  target: PropTypes.bool,
  children: PropTypes.any,
};

const defaultProps = {
  onClick: () => {},
  disabled: false,
  external: false,
};

function Inner(props) {
  const { label } = props;

  return (
    <Box flex={{
      justifyContent: 'center',
    }}>
      {label && (
        <Text
          className="Button-label"
          fontWeight="medium"
        >
          {label}
        </Text>
      )}
    </Box>
  );
}

class Button extends React.PureComponent {
  static Group = Group;

  state = {
    loading: false,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(e) {
    try {
      this.setState({ loading: true });
      await this.props.onClick(e);
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { type, htmlType, expand, to, external, target,
      size, className, disabled, children, ...rest } = this.props;
    const { loading } = this.state;
    const classes = cx(
      className,
      size,
      {
        Button: type,
        [`Button-${type}`]: type,
        'Button-expand': expand,
      },
    );

    const inner = <Inner {...rest} />;

    if (to) {
      if (external || target) {
        return <a href={to} className={classes} target="_blank">{inner}</a>;
      }

      return (
        <Link to={to} className={classes}>{inner}</Link>
      );
    }

    return (
      <button
        className={classes}
        type={htmlType}
        onClick={this.handleClick}
        disabled={loading || disabled}
      >
        {loading && <Icon name="loading" />}
        {inner}
      </button>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default withRouter(Button);
