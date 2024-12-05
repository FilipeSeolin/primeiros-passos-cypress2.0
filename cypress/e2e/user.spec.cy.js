import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage ()
const dashboardPage = new DashboardPage ()
const menuPage = new MenuPage ()
const myInfoPage = new MyInfoPage ()


describe('Orange HRM Tests', () => {


  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWhithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.letter({casing: 'upper'}), chance.last(), chance.string())
    myInfoPage.fillEmployeeDetails(chance.animal(), chance.word(), chance.ssn({ ssnFour: true }), '2025-07-29', chance.zip(), chance.prime())
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })

})