describe('Test Login - Form Authentication', () => {

  it('Debe loguearse correctamente', () => {

    // Ir a la página
    cy.visit('https://the-internet.herokuapp.com/')

    // Clicar en "Form Authentication"
    cy.contains('Form Authentication').click()

    // Rellenar datos
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')

    // Clicar en Login
    cy.get('button[type="submit"]').click()

    // Comprobar mensaje de bienvenida
    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'You logged into a secure area!')

  })

})