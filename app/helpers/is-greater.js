import { helper } from '@ember/component/helper';

export function isGreater(params/*, hash*/) {
  return params[0] > params[1];
}

export default helper(isGreater);
