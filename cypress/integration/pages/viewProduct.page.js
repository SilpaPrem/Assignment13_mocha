class ViewProd{
get btnCart(){return cy.contains('Add to Cart')}


addToCart() {
    this.btnCart.click()
}
}
export default new ViewProd()