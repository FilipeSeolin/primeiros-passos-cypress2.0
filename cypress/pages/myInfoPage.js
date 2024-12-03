class MyInfoPage {

    selectorsList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            firsNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            secondItemCombobox: ".oxd-select-dropdown > :nth-child(143)",
            thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
            forthItemCombobox: ".oxd-select-dropdown > :nth-child(1)",
            submitButton: "[type='submit']",
            dateCloseButton: ".--close",
            genericCombobox: ".oxd-select-text--arrow"
        }

        return selectors
    }
        accessMyInfoPage() {
            cy.get(this.selectorsList().firsNameField).clear().type('Maximliano'),
            cy.get(this.selectorsList().middleNameField).clear().type('Rodrigo')
            cy.get(this.selectorsList().lastNameField).clear().type('Fuentes')
            cy.get(this.selectorsList().genericField).eq(3).clear().type('MaxFuentes')
            cy.get(this.selectorsList().genericField).eq(4).clear().type('FrontTest')
            cy.get(this.selectorsList().genericField).eq(5).clear().type('15355693')
            cy.get(this.selectorsList().genericField).eq(6).clear().type('2025-01-15')
            cy.get(this.selectorsList().dateCloseButton).click()
            cy.get(this.selectorsList().genericCombobox).eq(0).click()
            cy.get(this.selectorsList().secondItemCombobox).click()
            cy.get(this.selectorsList().genericCombobox).eq(1).click()
            cy.get(this.selectorsList().thirdItemCombobox).click()
            cy.get(this.selectorsList().genericCombobox).eq(2).click()
            cy.get(this.selectorsList().forthItemCombobox).click()
            cy.get(this.selectorsList().dateField).eq(1).clear().type('1995-08-09')
            cy.get(this.selectorsList().submitButton).eq(0).click()
    }

}

export default MyInfoPage