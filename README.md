# Cypress Web Automation Testing from Zero to Hero
## Install
* git
* node js
* vscode
## Check
* check node version `node -v`
* check npm version `npm -v`
* install npm `npm install`
* start npm `npm start`
* visit site `http://localhost:4200/`
* install cypress `npm install cypress --save-dev`
* open cypress `npx cypress open`

**Add configuration in cypress.json**
```json
{
    "baseUrl": "http://localhost:4200",
    "ignoreTestFiles": "**/examples/*",
    "viewportHeight": 768,
    "viewportWidth": 1024
}
```
* add `firstTest.spec.js`
* run `npm start`
* run `npx cypress open`

**CLI**
* run `npx cypress run`
* run in chrome `npx cypress run --browser chrome`
* run tests from a single spec file and record the results on the Dashboard `npx cypress run --record --spec "cypress/integration/my-spec.js"`
* don't record video -add `"video": false` in cypress.json
* starts server, waits for URL, then runs test command, when the tests end, shuts down server run command `npm install --save-dev start-server-and-test`
```txt
This command is meant to be used with NPM script commands. If you have a "start server", and "test" script names for example, you can start the server, wait for a url to respond, then run tests. When the test process exits, the server is shut down.
```
* add `"cypress:e2e":"start-test start http-get://localhost:4200 cypress:run"` in package.json -> scripts 
* run `npm run cypress:e2e`

**Cypress-plugin-retries**
* install `npm install -D cypress-plugin-retries`
* add in *cypress/support/index.js* `import 'cypress-plugin-retries'`
* to enable retry logging in the terminal alongside mocha output Inside *cypress/plugins/index.js*
```js
module.exports = (on, config) => {
  require('cypress-plugin-retries/lib/plugin')(on)
}
```
* add `CYPRESS_RETRIES=2` in *cypress:run*
* set the `env` key in your `cypress.json` configuration file to set the retry number for all spec files
```json
{
  "env":
  {
    "RETRIES": 2
  }
}
```
* change env `npx cypress open --env configFile=qa`