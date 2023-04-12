// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

import createWrapper from '@cloudscape-design/components/test-utils/selectors'

describe('Cloudscape Design System: Select', () => {
  it('uses test selector', () => {
    const select = createWrapper().findSelect()
    const openDropdown = select.findDropdown().findOpenDropdown()
    cy.visit('/')
    cy.get(select.findDropdown().toSelector()).click()
    cy.get(openDropdown.toSelector()).should('be.visible')
    cy.get(select.findDropdown().findOption(3).toSelector()).click()
    cy.get(select.findDropdown().toSelector()).should(
      'include.text',
      'Option 3',
    )
  })
})
