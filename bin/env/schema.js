const normal = require('normalizr');

const config = new normal.schema.Entity('config', {config:});

const schema = {
  config: [config]
};

module.exports = { schema };
