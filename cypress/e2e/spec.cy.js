describe('Test Login - Form Authentication', () => {

  it('Debe loguearse correctamente', () => {

    // 1. Ir a la página
    cy.visit('https://the-internet.herokuapp.com/')

    // 2. Clicar en "Form Authentication"
    cy.contains('Form Authentication').click()

    // 3. Rellenar datos
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')

    // 4. Clicar en Login
    cy.get('button[type="submit"]').click()

    // 5. Comprobar mensaje de bienvenida
    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'You logged into a secure area!')

  })

  it('Debe comprobar que el menú tiene 5 elementos en Shifting Content', () => {

    // 1. Entrar en la página
    cy.visit('https://the-internet.herokuapp.com/')

    // 2. Ir a "Shifting Content"
    cy.contains('Shifting Content').click()

    // 3. Ir a "Example 1: Menu Element"
    cy.contains('Example 1: Menu Element').click()

    // 4. Comprobar que el menú tiene 5 elementos
    cy.get('.example ul li')
      .should('have.length', 5)

  })

})