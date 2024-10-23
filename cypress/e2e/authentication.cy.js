describe('authentication', () => {
  let url = 'https://dev-cash-release.sunculture.io/'
  
  it.only('passesLogs in with correct credentials', () => {
    cy.visit(url)
    cy.get('#email').type('wincasty.kariuki@sunculture.com')
    cy.get('#password').type('B13ss3d@2024')
    cy.contains('button','Login').click()
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome to Petty Cash Management System').should('be.visible')
  })

  it('Login fails with incorrect credentials', () => {
    cy.visit(url)
  })

  it('password reset link is present', () => {
    cy.visit(url)
  })

  it('log out is successful', () => {
    cy.visit(url)
  })

})