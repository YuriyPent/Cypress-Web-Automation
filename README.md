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