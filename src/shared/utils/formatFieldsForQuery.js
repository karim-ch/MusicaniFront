import { transform } from 'lodash';

export default (data) => transform(data, (acc, val, key) => acc.push({ field: key, value: val }), []);
