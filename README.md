# Kranos

Kranos is a beginning of using Webpack 4 with React without using the 
Create React App. 

Kranos is hard. Kranos sucks and now I know why people would rather just use Create React App. However businesss is hard. And things need to be like Kranos more often than Create React App.

You will need.. 
* A computer (MacOS, Linux or Windows)
* Terminal or Git Bash for Windows
* [Node.js](https://www.nodejs.org)
* [GIT](https://git-scm.com/)
* IDE or Text Editor (VS Code, WebStorm, Sublime Text, Notepad)

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

#### Why NPM instead of YARN?
_personally doesn't matter as long as you use one package manager and only one. Dependacies can get awful during updates when you have more than one package manager. I chose NPM because it has made great strides in keeping open source community engadged. And was pushed to improve with YARN on the block_

### Why use Airbnb instead of (insert styleguide)
_well documented, explains every reasoning behind rule set from React perspective and tired of recreating the wheel and barnshedding arguements. We should just code and let the machine do the formatting for us._

### Why Travis CI
_Incredibly easy to integrate with public coding using Github. Very well could use Jenkins to do the same but with less than a couple hours using Travis CI_

To get started, clone the project and run
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

Things for the future 
* integrating e2e testing framework that is cross browser
* react dependacies like routing/state manager

