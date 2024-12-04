class LoginPage {

    selectorsList() {
        const selectors ={
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCrefentialAlert: "[role='alert']",
            wrongUserNameField: "[name='username']",
            wrongPasswordField: "[name='password']",
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('/auth/login')
    }
    loginWhithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    checkAccessInvalid() {
        cy.get(this.selectorsList().wrongCrefentialAlert)
    }

}

export default LoginPage
