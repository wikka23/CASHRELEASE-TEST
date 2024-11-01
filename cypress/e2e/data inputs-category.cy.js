import { faker } from '@faker-js/faker';
describe('Data inputs - category', () => {
    
    let category = faker.finance.transactionDescription()
    let netsuitId = faker.string.numeric(6)
    let editNetsuitId = faker.string.numeric(6)
    let editCategory = category+' edit'

    beforeEach(() => {
        cy.login()
        cy.clickDropDownLink('Data Inputs', 'Add Category')
        cy.url().should('contain','/add-expense-category')
        cy.contains('h6','Expense categories').should('exist')
    })

    it('Add Category', () => {
        
        cy.clickButton('Add category')
        cy.contains('Create an expense category').should('be.visible')
        cy.xpath("//label[text()='Expense category']//following-sibling::input").type(category)
        cy.xpath("//label[text()='NetSuite ID']//following-sibling::input").type(netsuitId)
        cy.clickButton('Create')
        cy.contains('Data saved successfully',{matchCase : false}).should('exist')
        cy.xpath("//tr/td[text()='"+category+"']").should('be.visible')

    })

   it('Search for added category', () => {
        cy.get('#search').type(category)
        cy.xpath("//tr/td[text()='"+category+"']").should('be.visible')
        cy.xpath("//tr/td[text()='"+netsuitId+"']").should('be.visible')
    })

    it('Edit added category', () => {
        cy.get('#search').type(category)
        cy.xpath("//tr/td[text()='"+category+"']").should('be.visible')
        cy.xpath("//tr/td[text()='"+category+"']//following-sibling::td/div/button[1]").click()
        cy.xpath("//span[text()='Restirct to users']//preceding-sibling::input").click()
        cy.xpath("//span[text()='Restrict to finance']//preceding-sibling::input").click()
        cy.clickButton('Save edit')
        cy.contains('saving edited data',{matchCase : false}).should('exist')
        cy.xpath("//tr/td[text()='"+category+"']").should('be.visible')
    })

    it('Delete category', () => {
        cy.get('#search').type(category)
        cy.xpath("//tr/td[text()='"+category+"']").should('be.visible')
        cy.xpath("//tr/td[text()='"+category+"']//following-sibling::td/div/button[2]").click()
        cy.contains('Are you sure you want to delete this expense category?').should('be.visible')
        cy.clickButton('Delete')
        cy.contains('Deleting data',{matchCase : false}).should('exist')
    })
})
