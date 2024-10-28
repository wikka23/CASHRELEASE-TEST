describe('Authentication', () => {
  it('The user is able to log in to the system.', () => {
    cy.fixture('prod.json').then((user)=>{
      cy.visit(user.url)
      cy.get('#email').type(user.username);
      cy.get('#password').type(user.password)
      cy.xpath("//button[text()='Login']").click();
      cy.contains('Welcome to Petty Cash Management System').should('be.visible')
  })
  })

  it('The user is able to log out of the system.', () => {
    cy.fixture('prod.json').then((user)=>{
      cy.visit(user.url)
      cy.get('#email').type(user.username);
      cy.get('#password').type(user.password)
      cy.xpath("//button[text()='Login']").click();
      cy.contains('Welcome to Petty Cash Management System').should('be.visible')
      cy.xpath("//button[text()='Logout']").click()
      cy.xpath("//button[text()='Login']").should('be.visible');
  })
  })

  it('The user cannot access protected pages without logging in', () => {
    cy.fixture('prod.json').then((user)=>{
      cy.visit(user.url+'submit-expenses')
      cy.xpath("//button[text()='Login']").should('be.visible');
  })
  })

  it('The user is able to access reset password screen using existing email',() => {
    cy.fixture('prod.json').then((user)=>{
      cy.visit(user.url)
      cy.xpath("//button[text()='Login']").should('be.visible')
      cy.xpath("//a[contains(text(),'Forgot password')]").click()
      cy.url().should('contain','/forgot-password')
      cy.get('#email').type(user.username)
      cy.xpath("//button[text()='Reset password']").click()
      cy.contains('Password reset email sent').should('exist')

  })
  })

  
  it.only('The user is able to access reset password screen using false email',() => {
    cy.fixture('prod.json').then((user)=>{
      cy.visit(user.url)
      cy.xpath("//button[text()='Login']").should('be.visible')
      cy.xpath("//a[contains(text(),'Forgot password')]").click()
      cy.url().should('contain','/forgot-password')
      cy.get('#email').type('boom254@glink.co')
      cy.xpath("//button[text()='Reset password']").click()
      cy.contains('Email does not exist').should('exist')

  })
  })

})