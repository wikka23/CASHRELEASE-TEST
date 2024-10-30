describe('Expenses', () => {
    beforeEach(() => {
        cy.login()
    })

    it('The user is able to submit expenses under my expenses ,Engineer expenses', () => {
        cy.clickDropDownLink('My Expenses', 'Submit Expenses')
        cy.contains('h5', 'My expenses').should('exist')
        cy.clickButton('Engineers expenses')
        cy.contains('Upload engineers expenses').should('be.visible')
        cy.xpath("//label[text()='Select expense category']//following-sibling::select").select('Consultancy services');
    })

    it('The user is able to retrieve an expense through the search button', () => {
        
    })

    

    
})
