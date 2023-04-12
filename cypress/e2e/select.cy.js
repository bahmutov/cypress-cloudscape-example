// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

describe('Cloudscape Design System: Select', () => {
  it('selects an option', () => {
    cy.visit('/')
    cy.contains('button[aria-expanded=false]', 'Option 1').click()
    cy.get('[role=listbox]')
      .should('be.visible')
      .get('[role=option]')
      .should('have.length.at.least', 3)
      .contains('[role=option]', 'Option 3')
      .click()
    cy.log('**Option 3 is selected**')
    cy.contains('button[aria-expanded=false]', 'Option 3')
    cy.get('[role=listbox]').should('not.be.visible')
  })
})
