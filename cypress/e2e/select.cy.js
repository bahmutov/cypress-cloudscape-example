// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

describe('Cloudscape Design System: Select', () => {
  it('selects an option', () => {
    cy.visit('/')
    cy.contains('[data-testid=my-select]', 'Option 1')
      .find('button[aria-expanded=false]')
      .click()
    cy.contains('[data-testid=my-select]', 'Option 1')
      .find('button[aria-expanded=true]')
      .get('[role=option]')
      .should('have.length', 5)
      .contains('[role=option]', 'Option 1')
      .should('have.attr', 'aria-selected', 'true')

    cy.log('**select option 3**')
    cy.contains('[data-testid=my-select] [role=option]', 'Option 3').click()
    cy.contains('[data-testid=my-select]', 'Option 3')
    cy.log('**dropdown is closed**')
    cy.get('[data-testid=my-select] [role=listbox]').should('not.be.visible')
  })
})
