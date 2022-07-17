import { Then, When } from 'cypress-cucumber-preprocessor/steps'

When('I open the application', () => {
  cy.visit('/')
})

Then('I can see navbar with logo', () => {
  cy.url().should('contain', 'applifting-exercise.netlify.app')
  cy.get('#navbar').should('be.visible')
  cy.get('#logo').should('be.visible')
})

When('I am logged out', () => {
  cy.get('#login').should('be.visible').should('contain', 'Log in')
})

When('Click login button', () => {
  cy.get('#login').click()
})

const credentials = {
  'jitka@seznam.cz': 'ahoj',
}

Then('Login as {string}', (username: string) => {
  const password = credentials[username]
  if (!password) {
    throw new Error('Trying to login with unknown user.')
  }
  cy.get('#email').clear().type(username)
  cy.get('#password').clear().type(password)
  cy.get('#login-button').click()
})

Then('I am logged in', () => {
  cy.get('#my-articles').should('be.visible').should('contain', 'My articles')
})

When('Login as {string} with wrong password', (username: string) => {
  cy.get('#email').clear().type(username)
  cy.get('#password').clear().type('wrong password')
  cy.get('#login-button').click()
})

Then('I am not logged in', () => {
  cy.get('#error').should('be.visible').should('contain', 'Password invalid')
})
