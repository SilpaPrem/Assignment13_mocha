import comm from '../components/sign.comp.js'
class Catalog{
    get lnkDog(){return cy.get('img[src="../images/sm_dogs.gif"]')}
    get tblCata(){return cy.contains('K9-DL-01')}
signInCom(){
comm.signIn()

}
logsIn(){
    comm.login()
}
selectMenu()
{
    this.lnkDog.click()
}
selectItem(){
    this.tblCata.click()
}
}
export default new Catalog()