var GitflowPublisher = require('gitflow-publisher');
var GitflowNpmPublisher = require('gitflow-publisher-npm');
var publisher = new GitflowPublisher();

publisher.use(new GitflowNpmPublisher({
    name: 'module-name',
  registry: 'http://registry.npmjs.org/'
}));

publisher.publish({
  branch: 'master',
  commit: true,
  release: true
});
