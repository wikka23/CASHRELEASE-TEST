

Cypress.Commands.add('login', () => { 
    cy.visit(Cypress.env('url'))
    cy.get('#email').type(Cypress.env('username'));
    cy.get('#password').type(Cypress.env('password'))
    cy.xpath("//button[text()='Login']").click();
    cy.contains(Cypress.env('loginMessage')).should('be.visible')
})

Cypress.Commands.add('clickDropDownLink',(parent,child) => {
    cy.xpath("//a[contains(text(),'"+parent+"')]").click()
    cy.xpath("//a[contains(text(),'"+child+"')]").click()
})

Cypress.Commands.add('clickButton',(text) => {
    cy.xpath("//button[contains(text(),'"+text+"')]").click()
})

Cypress.Commands.add('generateRandomNumber', (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
});
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })