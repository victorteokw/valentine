if (process.env.NODE_ENV === 'prod') {
  module.exports = require('./index.prod');
} else {
  module.exports = require('./index.dev');
}
