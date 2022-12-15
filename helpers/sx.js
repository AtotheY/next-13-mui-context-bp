import merge from 'lodash.merge';

export const m = (...params) => merge({}, ...params);
