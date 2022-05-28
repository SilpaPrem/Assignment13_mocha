class Order{
get btnContinue(){return cy.get('input[name="newOrder"]')}
continue(){
    this.btnContinue.click()
}
}
export default new Order()