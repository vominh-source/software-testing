module.exports = (on, config) => {
  require('cypress-multi-reporters');
  const { Spec } = require('cypress-multi-reporters');
  
  on('before:run', () => {
    console.log('Starting test run...');
  });

  on('after:run', (results) => {
    console.log('Test run completed.');
  });

  return {
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'spec, mocha-junit-reporter',
      mochaJunitReporterOptions: {
        mochaFile: 'reports/junit/results.xml',
      },
    },
  };
};