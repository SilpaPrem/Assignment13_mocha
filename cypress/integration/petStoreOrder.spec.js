import comm from '../integration/components/sign.comp'
import addIt from '../integration/pages/addItem.page'
import cata from '../integration/pages/catalog.page'
import confi from '../integration/pages/confirm.page'
import fin from '../integration/pages/final.page'
import hom from '../integration/pages/home.page'
import log from '../integration/pages/login.page'
import ord from '../integration/pages/order.page'
import regis from '../integration/pages/registration.page'
import view from '../integration/pages/viewProduct.page'

describe('End to End Journey',()=>{
    it('Test case001',()=>{
        hom.siteUrl()
        log.register()
        regis.DataUpdate()
        cata.signInCom()
        cata.logsIn()
        cata.selectMenu()
        cata.selectItem()
        view.addToCart()
        addIt.proceed()
        ord.continue()
        confi.confirm()
        fin.lblMessage.should('have.text','Thank you, your order has been submitted.')
        fin.signOut()



    })
})