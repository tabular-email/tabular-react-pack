/* @remove-on-es-build-begin */
// this file is not used if you use babel-plugin-import
const ENV = process.env.NODE_ENV;
if (
  ENV !== 'production'
  && ENV !== 'test'
  && typeof console !== 'undefined'
  && console.warn // eslint-disable-line no-console
  && typeof window !== 'undefined'
) {
  // eslint-disable-next-line no-console
  console.warn(
    'You are using a whole package of tabular-react-pack, '
    + 'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
  );
}
/* @remove-on-es-build-end */

export { default as Box } from './box';

export { default as Flex } from './flex';

export { default as Padding } from './padding';
