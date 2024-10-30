import { faker } from '@faker-js/faker';
describe('Data inputs', () => {
    
    beforeEach(() => {
        cy.login()
    })

    it.only('Add department', () => {
        cy.clickDropDownLink('Data Inputs', 'Add Department')
        cy.url().should('contain','/add-department')
        cy.contains('h6', Cypress.env('projectName')+' departments').should('exist')
        cy.clickButton('Add department')
        cy.contains('Create a department').should('be.visible')
        
        cy.xpath("//label[text()='Department name']//following-sibling::input").type(faker.commerce.department())
        cy.xpath("//label[text()='NetSuite ID']//following-sibling::input").type('4590')
        cy.clickButton('Create')
        cy.contains('saving data',{matchCase : false}).should('exist')
    })

    it('The user is able to retrieve an expense through the search button', () => {
        
    })
})
