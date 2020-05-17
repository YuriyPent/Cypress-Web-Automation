/// <reference types = "cypress" />

import { navigateTo } from "../support/page_objects/navigationPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage"
import { onDatepickerPage } from "../support/page_objects/datePickerPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"

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

    it.only('should submit Inline and Basic form and select tomorrow date in the calendar', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Test', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', 'password')
        navigateTo.datePickerPage()
        onDatepickerPage.selectCommonDatePickerDateFromToday(1)
        onDatepickerPage.selectDatePickerWithRangeFromToday(7, 14)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Test', 'Tester')
        onSmartTablePage.updateAgeByFirstName('Test', '21')
        onSmartTablePage.deleteRowByIndex(1)

    })
})