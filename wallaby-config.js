module.exports = function(wallaby) {
  return {
    env: {
      type: 'node'
    },
    files: ['bin/**/*.js', 'lib/**/*.js'],
    tests: ['test/bin/**/*.js', 'test/**/*.js'],
    testFramework: 'mocha',
    compilers: {
      '**/*.js': wallaby.compilers.babel()
    }
  };
};
