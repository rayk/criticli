const normal = require('normalizr');

const state = new normal.schema.Entity('state');

const schema = {
  state: [state]
};

module.exports = { schema };
