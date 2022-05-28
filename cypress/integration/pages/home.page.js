import comm from '../components/sign.comp.js'
class Home {
      siteUrl() {
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
        comm.signIn()

    }
    
}
export default new Home()