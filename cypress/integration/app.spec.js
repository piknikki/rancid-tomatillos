describe('Rancid Tomatillos UI happy path', () => {

  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/539885', {fixture: 'mock-movieProfile.json'})
    .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'mock-movies.json'})
    .visit('http://localhost:3001')
  })

  it('Should be able to visit the page and render the correct elements', () => {
    cy.get('header').contains('Rancid Tomatillos')
    cy.get('.searchbar-container').children().contains('Submit')
    cy.get('.cards').children().contains('Ava')
  })

  it('Should get all the movies', () => {
    cy.get('h1').contains('Welcome.')
    cy.get('.cards')
      .find('a')
      .should('have.length', 4)
  })

  it('Should show one movie on a profile page view with correct route', () => {
    cy.get('#539885').should('exist').click()
    cy.url().should('include', '/539885')
    cy.get('.movie-title').contains('Ava')
      .get('.go-back').should('exist')
      .get('.delete').should('exist')
  })

  it('should have a loading element before movies are fetched', () => {
    const now = new Date(Date.UTC(2021, 4, 5)).getTime()

    cy.clock(now)
    cy.visit('http://localhost:3001/')
    cy.get('.loading').should('have.text', 'Loading...')
    cy.tick(5000)
    cy.get('h1').contains('Welcome.')
  })

  it('Should not show a movie that was deleted', () => {
    cy.get('#539885').should('exist').click()
    cy.get('#delete').click()
    cy.get('.cards')
      .find('a')
      .should('have.length', 3)
  })

});

describe('Search', () => {
  it('Should be able to search for a movie and then see that movie card', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/539885', {fixture: 'mock-movieProfile.json'})
      .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'mock-movies.json'})
      .visit('http://localhost:3001')

    cy.get('.search-form').find('[type="text"]').type('ava')

    cy.get('.searchBtn').click()
    cy.get('.cards').children().contains('Ava').click()
    cy.url().should('include', '/539885')
    cy.get('.movie-title').contains('Ava')
  })
})

describe('Rancid Tomatillos UI sad path', () => {
  it('Should be sad when no movies exist', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: ''})
      .visit('http://localhost:3001')
    cy.get('.error-feedback').contains('Unexpected end of JSON input')
  })

  it('Should show 404 page when no such page exists and go back home on click', () => {
    cy.visit('http://localhost:3001/5')

    cy.get('h3').contains('Oops!')
    cy.get('.btn').should('exist').click()
    cy.url().should('eq', 'http://localhost:3001/')
  })

})
