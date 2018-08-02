const shell = require('shelljs');
const version = require('./src/version.json');

const projectId = 'angular';
const organizationId = 'platformer-cloud-org';

shell.exec(`sentry-cli releases -o ${organizationId} -p ${projectId} new ${version.tunnel}-${version.version}`);
shell.exec(`sentry-cli releases -o ${organizationId} -p ${projectId} files ${version.tunnel}-${version.version} upload-sourcemaps dist/ReactiveDemo`);
