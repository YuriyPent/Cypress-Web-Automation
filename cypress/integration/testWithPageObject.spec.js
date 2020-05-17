/// <reference types = "cypress" />

import { navigateTo } from "../support/page_objects/navigationPage"

describe('Test with Page Object', () => {

    beforeEach('open application', () => {
        cy.visit('/')
    })

    it('verify navigations actions the page', () => {
        
        navigateTo.formLayoutsPage()
        navigateTo.datePickerPage()
        navigateTo.smartTablePage()
        navigateTo.toasterPage()
        navigateTo.toolTipPage()
    })
})