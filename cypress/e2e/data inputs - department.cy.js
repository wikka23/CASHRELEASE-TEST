import { faker } from '@faker-js/faker';
describe('Data inputs - Department', () => {
    
    let department = faker.commerce.department()
    let netsuitId = faker.string.numeric(6)
    let editNetsuitId = faker.string.numeric(6)
    let editDepartment = department+' edit'

    beforeEach(() => {
        cy.login()
        cy.clickDropDownLink('Data Inputs', 'Add Department')
        cy.url().should('contain','/add-department')
        cy.contains('h6', Cypress.env('projectName')+' departments').should('exist')
    })

    it('Add department', () => {
        
        cy.clickButton('Add department')
        cy.contains('Create a department').should('be.visible')
        cy.xpath("//label[text()='Department name']//following-sibling::input").type(department)
        cy.xpath("//label[text()='NetSuite ID']//following-sibling::input").type(netsuitId)
        cy.clickButton('Create')
        cy.contains('saving data',{matchCase : false}).should('exist')
        cy.xpath("//tr/td[text()='"+department+"']").should('be.visible')

    })

    it('Search for added department', () => {
        cy.get('#search').type(department)
        cy.xpath("//tr/td[text()='"+department+"']").should('be.visible')
    })

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
})
