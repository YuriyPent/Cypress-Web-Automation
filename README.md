# Cypress Web Automation Testing from Zero to Hero
## Install
* git
* node js
* vscode
## Check
* node -v
* npm -v
* npm install
* npm start
* http://localhost:4200/
* npm install cypress --save-dev
* npx cypress open

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
* add `"cypress:e2e":"start-test start http-get://localhost:4200 cypress:run"` in package.json -> scripts 
* run `npm run cypress:e2e`