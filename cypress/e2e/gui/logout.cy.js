describe('Logout', () => {
    beforeEach(() => {
      cy.login()
      cy.visit('/')
    })
    it.only('Logout', () => {
      
      cy.logout()
      
      cy.get("[data-qa-selector='login_page']").should('be.visible')
      cy.url().should('be.equal',`${Cypress.config('baseUrl')}/users/sign_in`)
    })
  })