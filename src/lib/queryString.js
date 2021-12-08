export const queryString = (obj) => {
  return Object.keys(obj).map((key) => {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      throw new Error('Please, check your params');
    }

    return `${key}=${obj[key]}`
  }).join('&');
}

export const parse = (qs) => {
  if (qs.indexOf('=') === -1) throw new Error('Please, check your params');

  return Object.fromEntries(qs.split('&').map((item) => {
    let [key, value] = item.split('=');

    if (value.indexOf(',') > -1) value = value.split(',');

    return [key, value];
  }));
}
