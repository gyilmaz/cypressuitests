import '@testing-library/cypress/add-commands';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("signup", (name, email, password) => { 
    cy.get('form').within(($form) => {
        // you have access to the found form via
        // the jQuery object $form if you need it
      
        // cy.get() will only search for elements within form,
        // not within the entire document
        cy.get('input[name="name"]').type('John Doe')
        cy.get('input[name="email"]').type('john.doe@email.com')
        cy.get('input[name="password"]').type('password')
      })
      cy.get('form')
        .findByText('Sign Up')
        .should('exist')
        .click()
 })
//Examples
//  cy.findByRole('button', { name: /Jackie Chan/i }).click()
// cy.findByRole('button', { name: /Button Text/i }).should('exist')
// cy.findByRole('button', { name: /Non-existing Button Text/i }).should(
//   'not.exist'
// )
// cy.findByLabelText(/Label text/i, { timeout: 7000 }).should('exist')

// // findAllByText _inside_ a form element
// cy.get('form')
//   .findByText('button', { name: /Button Text/i })
//   .should('exist')
// cy.findByRole('dialog').within(() => {
//   cy.findByRole('button', { name: /confirm/i })
// })