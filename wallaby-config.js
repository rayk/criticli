module.exports = function(wallaby) {
  return {
    files: ["bin/**/*.js", "lib/**/*.js"],
    tests: ["test/**/*.js"]
  };
};
