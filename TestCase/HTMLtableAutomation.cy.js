/// <reference types='cypress'/>

describe('HTML Table Elements Handling', () => {
    it('Visit the URL', () => 
    
    {
      cy.visit('https://sqengineer.com/practice-sites/practice-tables-selenium/') //Visit the URL
      
    })


    it('check value presence anywhere in the table', () => 
    {
      //1. check value presence anywhere in the table
      cy.get('#table1').contains('td','TestComplete').should('be.visible')

    })


    it('check value presence in specific row & column', () => 
    {
      //2. check value presence in specific row & column
      cy.get('#table2 > tbody > tr:nth-child(3) > td:nth-child(3)').contains('Foot ball').should('be.visible')
    })


    it('verify the tool type which automation tool is Selenium', () => 
    {
      //3. verify the tool type which automation tool is Selenium
      cy.get('#table1>tbody>tr td:nth-child(2)').each(($e,index,$list) => {

        const text=$e.text()
        if(text.includes("Open Source"))
        {
          cy.get('#table1>tbody>tr td:nth-child(1)').eq(index).then(function(tname)
          {
            const toolName= tname.text()
            expect(toolName).to.equal('Selenium')
          })
        }
      })

    })

  })