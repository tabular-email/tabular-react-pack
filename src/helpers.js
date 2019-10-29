import fpCamelCase from 'lodash/fp/camelCase';

export default function convertPropsToClassName(props, pretext) {
  if (!props) return {};
  return Object.keys(props).map(
    (key) => `${pretext}-${key}--${fpCamelCase(props[key])}`,
  );
}
