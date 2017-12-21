'use strict';

module.exports = {
  tags: {
    allowUnknownTags: true
  },
  source: {
    include: ['lib/'],
    exclude: [],
    includePattern: '',
    excludePattern: ''
  },
  plugins: [],
  opts: {
    destination: './docs/',
    recurse: true
  },
  templates: {
    cleverLinks: true,
    default: {
      outputSourceFiles: false
    }
  }
};
