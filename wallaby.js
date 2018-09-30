module.exports = function () {

  return {
    files: ['src/**/*.js', '!src/**/*.test.js', '!node_m'],

    tests: ['src/**/*.test.js'],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest'
  };
};
