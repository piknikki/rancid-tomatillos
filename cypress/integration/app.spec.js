describe('Feedback Loop', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3002')
  })

  it('Should be able to visit the page and render the correct elements', () => {
    cy.get('header').contains('Rancid Tomatillos')
  })

  it('Should get all the movies', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:3002/'
    })

    cy.get('#694919').should('exist')
    // cy.get(':allMovies').should('have.length', 40)
  })

  it('Should show one movie', () => {
    cy.get('#694919').click()
    cy.get('.movie-title').contains('Money Plane')
    cy.get('button.go-back').should('exist')
    cy.get('button.delete').should('exist')
  })

})
