module.exports.queryString = (obj) =>
  Object.keys(obj).map((key) => {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      throw new Error('Please, check your params');
    }
    return `${key}=${obj[key]}`
  }).join('&');
