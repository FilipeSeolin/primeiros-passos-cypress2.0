import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage

describe('Orange HRM Tests', () => {

  const selectorsList = {
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firsNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    submitButton: "[type='submit']",
    dateCloseButton: ".--close",
    genericCombobox: ".oxd-select-text--arrow"
    
  }

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWhithUser(userData.userSuccess.username, userData.userSuccess.password)
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firsNameField).clear().type('Maximliano')
    cy.get(selectorsList.middleNameField).clear().type('Rodrigo')
    cy.get(selectorsList.lastNameField).clear().type('Fuentes')
    cy.get(selectorsList.genericField).eq(3).clear().type('MaxFuentes')
    cy.get(selectorsList.genericField).eq(4).clear().type('FrontTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('15355693')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-01-15')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericCombobox).eq(0).click()
    cy.get(':nth-child(143) > span').click()
    cy.get(selectorsList.genericCombobox).eq(1).click()
    cy.get(':nth-child(3) > span').click()
    cy.get(selectorsList.genericCombobox).eq(2).click()
    cy.get(':nth-child(6) > span').click()
    cy.get(selectorsList.dateField).eq(1).clear().type('1995-08-09')
    cy.get(selectorsList.submitButton).eq(0).click({ force: true})
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast')
    

  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCrefentialAlert)
  })
})