describe('Authentication', () => {
  it('The user is able to log in to the system.', () => {
    cy.login()
  })

  it('The user is able to log out of the system.', () => {
      cy.login()
      cy.xpath("//button[text()='Logout']").click()
      cy.xpath("//button[text()='Login']").should('be.visible');
  })

  it('The user cannot access protected pages without logging in', () => {
      cy.visit(Cypress.env('url')+'submit-expenses')
      cy.xpath("//button[text()='Login']").should('be.visible');
  })

  it('The user is able to access reset password screen using existing email',() => {
      cy.visit(Cypress.env('url'))
      cy.xpath("//button[text()='Login']").should('be.visible')
      cy.xpath("//a[contains(text(),'Forgot password')]").click()
      cy.url().should('contain','/forgot-password')
      cy.get('#email').type(Cypress.env('username'))
      cy.xpath("//button[text()='Reset password']").click()
      cy.contains('Password reset email sent').should('exist')
  })

  it('The user is not able to access reset password screen using non existing email',() => {
      cy.visit(Cypress.env('url'))
      cy.xpath("//button[text()='Login']").should('be.visible')
      cy.xpath("//a[contains(text(),'Forgot password')]").click()
      cy.url().should('contain','/forgot-password')
      cy.get('#email').type('boom254@glink.co')
      cy.xpath("//button[text()='Reset password']").click()
      cy.contains('Email does not exist').should('exist')
  })
})