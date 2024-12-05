class MyInfoPage {

    selectorsList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            firsNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            secondItemCombobox: ".oxd-select-dropdown > :nth-child(141)",
            thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
            forthItemCombobox: ".oxd-select-dropdown > :nth-child(1)",
            submitButton: "[type='submit']",
            dateCloseButton: ".--close",
            genericCombobox: ".oxd-select-text--arrow"
        }

        return selectors
    }

    fillPersonalDetails(firstName,middleName, lastName, nickName){
            cy.get(this.selectorsList().firsNameField).clear().type(firstName),
            cy.get(this.selectorsList().middleNameField).clear().type(middleName)
            cy.get(this.selectorsList().lastNameField).clear().type(lastName)
            // cy.get(this.selectorsList().genericField).eq(3).clear().type(nickName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenceNumber, expiryDate, ssnNumber, sinNumber) {
            cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
            cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
            cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenceNumber)
            cy.get(this.selectorsList().genericField).eq(6).clear().type(expiryDate)
            cy.get(this.selectorsList().dateCloseButton).click()
            cy.get(this.selectorsList().genericField).eq(7).clear().type(ssnNumber)
            cy.get(this.selectorsList().genericField).eq(8).clear().type(sinNumber)
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast')
    }

    fillStatus() {
            cy.get(this.selectorsList().genericCombobox).eq(0).click()
            cy.get(this.selectorsList().secondItemCombobox).click()
            cy.get(this.selectorsList().genericCombobox).eq(1).click()
            cy.get(this.selectorsList().thirdItemCombobox).click()
            cy.get(this.selectorsList().genericCombobox).eq(2).click()
            cy.get(this.selectorsList().forthItemCombobox).click()
            cy.get(this.selectorsList().dateField).eq(1).clear().type('1995-08-09')
    }

}

export default MyInfoPage