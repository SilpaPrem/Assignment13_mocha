class Common{
    get lnksignIn() { return cy.contains('Sign In') }
    get txtUserLogin(){return cy.get('input[name="username"]')}
    get txtPassLogin(){return cy.get('input[name="password"]')}
    get txtPassLogin(){return cy.get('input[name="password"]')}
    get btnLogin(){return cy.get('input[name="signon"]')}
    signIn() {
        this.lnksignIn.click()
    }
    login(){
       // this.txtUserLogin.type('peterson123')
        this.txtPassLogin.clear().type('password')
        this.btnLogin.click()
    }
}
export default new Common()