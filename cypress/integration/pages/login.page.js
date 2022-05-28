class Login{

    get lnkregister(){return cy.contains('Register Now!')}
    register(){
        this.lnkregister.click()
    }
}
export default new Login()