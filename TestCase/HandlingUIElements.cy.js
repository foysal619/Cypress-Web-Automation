/// <reference types='cypress'/>

describe('UI Elements Handling', () => {
    it('Visit the site and verify URL and Title', () => 
    
    {
      cy.visit('https://demo.guru99.com/test/newtours/') //Visit the URL
      cy.url().should('include','guru99') //Verify URL should include 'guru99'
      cy.title().should('eq','Welcome: Mercury Tours') //Title Verification
      
      cy.wait(5000)

    })

    it('Visit Register page and register as a new user', () => 
    
    {
        cy.get('body > div:nth-child(5) > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(3) > form > table > tbody > tr:nth-child(10) > td > table > tbody > tr > td:nth-child(2) > font > a').click() //Click on the Register page
        cy.get('input[name=firstName]').should('be.visible').type('Musfiqur')
        cy.get('input[name=lastName]').should('be.visible').type('Rahman')
        cy.get('input[name=phone]').should('be.visible').type('+0123456789')
        cy.get('#userName').should('be.visible').type('musfiq@gmail.com')
        cy.get('input[name=address1]').should('be.visible').type('Bangladesh')
        cy.get('input[name=city]').should('be.visible').type('Dhaka')
        cy.get('input[name=state]').should('be.visible').type('Uttara')
        cy.get('input[name=postalCode]').should('be.visible').type('1230')
        cy.get('select[name=country').select('BANGLADESH') //Select the drop down
        cy.get('#email').should('be.visible').type('musfiq1234')
        cy.get('input[name=password]').should('be.visible').type('Musfiq123##')
        cy.get('input[name=confirmPassword]').should('be.visible').type('Musfiq123##')

        cy.get('input[name=submit]').should('be.visible').click()
    })
    
    it('Sign In to the site', () => 
    
    {
        cy.get('body > div:nth-child(5) > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(3) > td > p:nth-child(2) > font > a').click() //Click on the sign in page
        cy.get('input[name=userName').should('be.visible').should('be.enabled').type('musfiq1234')
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type('Musfiq123##')

        cy.get('input[name=submit]').should('be.visible').click() //sign in
    })
    
    it('Book a flight:::Verify the radio box', () => 
    
    {
        cy.get('body > div:nth-child(5) > table > tbody > tr > td:nth-child(1) > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').click() //Click on the flights page
       
        //Radio Buttons
        cy.get('input[value=roundtrip]').should('be.visible').should('be.checked') //Visibility check
        cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click() //Visibility check
        
        //Booking flight form
        //select passenger number
        cy.get('select[name=passCount').select('3') //Select the drop down
        //from port
        cy.get('select[name=fromPort').select('London') //Select the drop down
        cy.get('select[name=fromMonth').select('December') //Select the drop down
        cy.get('select[name=fromDay').select('25') //Select the drop down

        //to port
        cy.get('select[name=toPort').select('Paris') //Select the drop down
        cy.get('select[name=toMonth').select('January') //Select the drop down
        cy.get('select[name=toDay').select('10') //Select the drop down

        //select the trip class
        cy.get('input[value=Coach]').should('be.visible').should('be.checked') //Visibility check
        cy.get('input[value=Business]').should('be.visible').should('not.be.checked').click() //Visibility check
        cy.get('input[value=First]').should('be.visible').should('not.be.checked') //Visibility check

        //select prefered airlines
        cy.get('select[name=airline').select('Pangea Airlines') //Select the drop down

        //confirm the boooking
        cy.get('input[name=findFlights]').should('be.visible').click() //Select the drop down
    })

    it('Sign In & Sign Out', () => 
    
    {
        cy.get('body > div:nth-child(5) > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(1) > a').click() //Click on the sign in page
        cy.get('input[name=userName').should('be.visible').should('be.enabled').type('musfiq1234')
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type('Musfiq123##')

        cy.get('input[name=submit]').should('be.visible').click() //sign in
        cy.get('body > div:nth-child(5) > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(1) > a').click()
    })
  })