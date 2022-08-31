/// <reference types="Cypress" />

import login from '../PageObjectModelClass/Login.cy'

describe('Test Suite', function() {

    it('valid Login', function() {

        const lp=new login()
        lp.visit()
        lp.fillEmail('admin@yourstore.com')
        lp.fillPassword('admin')
        lp.submit()
        cy.title().should('be.equal','Dashboard / nopCommerce administration')
    })
})