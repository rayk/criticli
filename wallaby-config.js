module.exports = function() {
  return {
    env: {
      type: 'node'
    },
    files: [
      'bin/**/*.js',
      'lib/**/*.js',
      'test/resources/*.js',
      'package.json'
    ],
    tests: ['test/unit/**/*.js'],
    testFramework: 'mocha'
  };
};
