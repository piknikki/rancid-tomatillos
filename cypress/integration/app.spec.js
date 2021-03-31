describe('Feedback Loop', () => {

  it('Should be able to visit the page and render the correct elements', () => {
    cy.visit('http://localhost:3000')
    cy.get('header').contains('Rancid Tomatillos')
  })

  it('Should get all the movies', () => {
    cy.visit('http://localhost:3000/694919')

    cy.url().should('include', '/694919')
  })

  it('Should show one movie', () => {
    cy.visit('http://localhost:3000')
    cy.get('#694919').click()
    cy.url().should('include', '/694919')
    cy.get('.movie-title').contains('Money Plane')
    cy.get('button.go-back').should('exist')
    cy.get('button.delete').should('exist')
  })

  it('Should show 404 page when no such page exists', () => {
    cy.visit('http://localhost:3000/5')

    cy.get('h3').contains('Oops!')
    cy.get('.btn').should('exist').click()
    cy.url ().should('eq', 'http://localhost:3000/')
  })

})
