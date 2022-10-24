# Introduction

- Getting Started - https://rushstack.io/pages/heft_tutorials/getting_started/

Core plugins

- Built-in plugins

  - These plugins are bundled with the @rushstack/heft package and are enabled by default:

  - Plugin Description - ApiExtractorPlugin - Implements the api-extractor task - CopyFilesPlugin - Implements the copy-files task - CopyStaticAssetsPlugin - Implements the copy-static-assets task - DeleteGlobsPlugin - Implements the delete-globs task - NodeServicePlugin - Implements the node-service task for developing Node.js services - ProjectValidatorPlugin - An internal Heft plugin that performs basic validation such as warning about obsolete files in the .heft folder - SassTypingsPlugin - Implements the sass-typings task - TypeScriptPlugin - Implements the typescript, eslint, and tslint tasks

- Packaged plugins

  - The following core plugins are published as separate NPM packages, and must be explicitly loaded using your project's heft.json config file
  - Plugins
    - @rushstack/heft-jest-plugin - Implements the jest task for unit tests
    - @rushstack/heft-webpack5-plugin - Implements the webpack bundling and webpack-dev-server functionality for Webpack 5
    - @rushstack/heft-webpack4-plugin - Supports older projects using Webpack 4

- Adding more tasks - https://rushstack.io/pages/heft_tutorials/adding_tasks/

- Heft comes with a number of built-in tasks that become enabled automatically based on config files that you create. All the tasks are documented in the Heft tasks section.

  - https://rushstack.io/pages/heft_tasks/api-extractor/

- Jest task

  - Further information, including instructions for debugging tests, can be found in the "jest" task reference - https://rushstack.io/pages/heft_tasks/jest/ and the heft-node-jest-tutorial sample project.

- Eslint task
  - More detail can be found in the eslint task reference.
