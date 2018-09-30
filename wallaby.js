module.exports = function () {

  return {
    files: ['formatDuration/*.js', '!**/*.test.js'],

    tests: ['**/*.test.js'],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest'
  };
};
