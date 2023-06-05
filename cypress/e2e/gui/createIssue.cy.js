import { faker } from '@faker-js/faker'

describe('Create Issue',  () => {
    const issue = {
        title:`issue-${faker.datatype.uuid()}`,
        description: faker.random.words(5),
        project : {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(5)
          }
    }
    beforeEach(() => {
        cy.api_deleteProject()
        cy.login()
        cy.api_createProject(project)
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.name).to.equal(project.name)
        expect(response.body.description).to.equal(project.description)
      })
    })
    it('sucessfully', () => {
        cy.gui_createIssue(issue)
        cy.get('.issue-details')
           .should('contain', issue.title)
           .and('contain', issue.description)
    })  
})

