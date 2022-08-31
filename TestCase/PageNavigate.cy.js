/// <reference types='cypress'/>

describe('MyTestSuit', () => {
    it('Page Navigation Test', () => 
    
    {
      cy.visit('https://chaldal.com')  //Homepage

      cy.title().should("eq","Online Grocery Shopping and Delivery in Bangladesh | Buy fresh food items, personal care, baby products and more") //title verify
            
        
      cy.get('#product-categories > div.mainTile > a:nth-child(2) > div > div.categoryName').click() //Bus ticket page
      cy.title().should('eq','Meat & Fish - Online Grocery Shopping and Delivery in Bangladesh | Buy fresh food items, personal care, baby products and more') //title verify

      cy.go('back')
      cy.title().should("eq","Online Grocery Shopping and Delivery in Bangladesh | Buy fresh food items, personal care, baby products and more") //title verify

      cy.go('forward')
      cy.title().should('eq','Meat & Fish - Online Grocery Shopping and Delivery in Bangladesh | Buy fresh food items, personal care, baby products and more') //title verify

      cy.go(-1)
      cy.title().should("eq","Online Grocery Shopping and Delivery in Bangladesh | Buy fresh food items, personal care, baby products and more") //title verify

      cy.go(1)
      cy.title().should('eq','Meat & Fish - Online Grocery Shopping and Delivery in Bangladesh | Buy fresh food items, personal care, baby products and more') //title verify

      cy.reload()
      cy.title().should('eq','Meat & Fish - Online Grocery Shopping and Delivery in Bangladesh | Buy fresh food items, personal care, baby products and more') //title verify
    })
  
    
  })