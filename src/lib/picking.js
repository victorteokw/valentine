import pick from 'lodash/pick';

export default function picking(...keys) {
  return function(o) {
    return pick(o, keys);
  };
}
