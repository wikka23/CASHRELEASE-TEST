 import { faker } from '@faker-js/faker';
describe('Data inputs -Exempt category', () => {
    
    let category = faker.finance.transactionDescription()
    let categoryId = faker.string.numeric(6)
    let editCategory = category+' edit'
  
    before(() => {
        cy.login()
        cy.clickDropDownLink('Data Inputs', 'Add Exempt Expense')
        cy.url().should('contain','/add-exempted-expense')
        cy.contains('h6','Exempt an expense category').should('exist') + Cypress.env('projectName')
    })

    it('Exempt category', () => {
        
        cy.clickButton('Exempt category')
        cy.contains('Create an expense category').should('be.visible')
        cy.get('.form-select').select(3)
        cy.xpath("//div[contains(@class, 'modal-footer')]//button[contains(text(), 'Exempt')]").click()
        cy.contains('saving data',{matchCase : false}).should('exist')
      

    })  

   it('Search for Exempt category', () => {
        cy.xpath("//tr/td[text()='"+category+"']").should('be.visible')
        
    })
})
 /* 
  it('Edit added department', () => {
        cy.get('#search').type(department)
        cy.xpath("//tr/td[text()='"+department+"']").should('be.visible')
        cy.xpath("//tr/td[text()='"+department+"']//following-sibling::td/div/button[1]").click()
        cy.xpath("//label[text()='Edit department']//following-sibling::input").clear().type(editDepartment)
        cy.xpath("//label[text()='NetSuite ID']//following-sibling::input").clear().type(editNetsuitId)
        cy.clickButton('Save edit')
        cy.contains('saving edited data',{matchCase : false}).should('exist')
        cy.xpath("//tr/td[text()='"+editDepartment+"']").should('be.visible')
    })

    it('Delete department', () => {
        cy.get('#search').type(editDepartment)
        cy.xpath("//tr/td[text()='"+editDepartment+"']").should('be.visible')
        cy.xpath("//tr/td[text()='"+editDepartment+"']//following-sibling::td/div/button[2]").click()
        cy.contains('Are you sure you want to delete this department?').should('be.visible')
        cy.clickButton('Delete')
        cy.contains('Deleting data',{matchCase : false}).should('exist')
    })
}) */
