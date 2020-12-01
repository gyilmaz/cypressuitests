
  context('Virathlon Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/signup')
    })
  
    describe('Sign up funtionality with name and email', () => {
      it('.should() - make an assertion about the current subject', () => {
        // https://on.cypress.io/should
        cy.signup('Joe Doe', 'johndoe@email.com', 'Password12345')
       })
    })
})