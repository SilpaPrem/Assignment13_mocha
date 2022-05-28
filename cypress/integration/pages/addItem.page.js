class AddItem{
get btnProceed(){return cy.contains('Proceed to Checkout')}

proceed()
{
    this.btnProceed.click()
}
}
export default new AddItem()