[![Build Status](https://travis-ci.org/Loonz806/kranos.svg?branch=master)](https://travis-ci.org/Loonz806/kranos)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
  <a href="#badge">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
  </a>

# Kranos

Kranos is a beginning of using Webpack 4 with React without using the 
Create React App. 

Kranos is hard. Kranos sucks and now I know why people would rather just use Create React App. However businesss is hard. And things need to be like Kranos more often than Create React App.

You will need.. 
* A computer (MacOS, Linux or Windows)
* Terminal or [Git Bash](https://gitforwindows.org/) for Windows
* [Node.js](https://www.nodejs.org), LTS version preferred
* [GIT](https://git-scm.com/)
* IDE or Text Editor (VS Code, WebStorm, Sublime Text, Notepad...etc)

Some helpful plugins for the text-editor 
* [EditorConfig](https://editorconfig.org/)
* [Eslint](https://eslint.org/)
* [Prettier](https://prettier.io/)

Some reading
* [Webpack](https://webpack.js.org/)
* [Airbnb JS Styleguide](https://github.com/airbnb/javascript)
* [Jest](https://facebook.github.io/jest/en/)
* [Travis CI](https://travis-ci.org/)

## Questions 
----

#### Why NPM instead of YARN?
_Personally doesn't matter as long as you use one package manager and only one. Dependacies can get awful during updates when you have more than one package manager. I chose NPM because it has made great strides in keeping open source community engadged. And was pushed to improve with the new kid YARN on the block_

### Why use Airbnb instead of (insert styleguide/creating own)?
_Well documented, explains every reasoning behind rule set from React perspective and I grew tired of recreating the wheel and [bikeshedding](https://en.wikipedia.org/wiki/Law_of_triviality) discussions. We should just code and let the machine do the formatting for us. Combined with Prettier it becomes easy to just jump in_

### Why Travis CI?
_Incredibly easy to integrate with public coding using Github. Very well could use Jenkins to do the same but with less than a couple hours using Travis CI and can leverage multiple directions after CI for FED code_

To get started, clone the project and run
```
npm install -g commitizen
```
then
```
npm install
```
To run the project from root 
```
npm run start
```
To run unit tests
```
npm run test
```
To build production code
```
npm run build
```

To commit code use command
```
git cz
```
_I removed the forced JIRA ticket reference for Commitizen until a JIRA project becomes necessary. If that is the case you can add these lines into the package.json file_

```
"validate-commit-msg": {
  "types": [
    "feat",
    "fix",
    "docs",
    "style",
    "refactor",
    "perf",
    "test",
    "chore",
    "revert"
  ],
  "warnOnFail": false,
  "maxSubjectLength": 100,
  "subjectPattern": "^[A-Z]+-[0-9]+ - .*",
  "subjectPatternErrorMsg": "Subject must be in format 'CMS-123 - Commit message'",
  "helpMessage": ""
}
```

Things for the future 
* integrating e2e testing framework that is cross browser
* react dependacies like routing/state manager

