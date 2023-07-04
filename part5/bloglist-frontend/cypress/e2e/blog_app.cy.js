describe('Blog app', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'Test User',
      username: 'test',
      password: 'test',
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('Show Login Form', function () {
    cy.contains('Blogs')
    cy.contains('Log in to application')
  })

  describe('Login', function () {
    it('Correct Credentials should succeed', function () {
      cy.get('#username').type('test')
      cy.get('#password').type('test')
      cy.get('#login-btn').click()
      cy.contains('Test User logged in')
    })

    it('Wrong Credentials should fail', function () {
      cy.get('#username').type('test')
      cy.get('#password').type('wrong')
      cy.get('#login-btn').click()
      cy.get('.error')
        .should('contain', 'invalid username or password')
        .and('have.css', 'color', 'rgb(255, 0, 0)')
        .and('have.css', 'border-style', 'solid')

      cy.get('html').should('not.contain', 'Test User logged in')
    })
  })

  describe('When user logged in', function () {
    beforeEach(function () {
      cy.login({ username: 'test', password: 'test' })
    })

    it('Create a blog', function () {
      cy.createBlog({
        title: 'A blog created by cypress',
        author: 'Cypress',
        url: 'https://www.test.com/',
      })

      cy.contains('A blog created by cypress')
    })

    describe('Other blogs exist', function () {
      beforeEach(function () {
        cy.createBlog({
          title: 'Blog 1',
          author: 'dummy',
          url: 'https://www.blog1.com/',
        })
        cy.createBlog({
          title: 'Blog 2',
          author: 'dummy',
          url: 'https://www.blog2.com/',
        })
        cy.createBlog({
          title: 'Blog 3',
          author: 'dummy',
          url: 'https://www.blog3.com/',
        })
      })

      it('One of those can be liked', function () {
        cy.contains('Blog 3').parent().find('button').click()
        cy.get('#like-btn').click()
      })

      it('One of those can be deleted', function () {
        cy.contains('Blog 2').parent().find('button').click()
        cy.get('#delete-btn').click()
        cy.get('html').should('not.contain', 'Blog 2')
      })

      it('Ordered by the number of likes in descending order', async function () {
        cy.contains('Blog 3').parent().find('button').click()
        cy.get('#like-btn').click().wait(500).click().wait(500)
        cy.contains('Blog 3').parent().find('button').click()

        cy.contains('Blog 2').parent().find('button').click()
        cy.get('#like-btn')
          .click()
          .wait(500)
          .click()
          .wait(500)
          .click()
          .wait(500)

        cy.get('.blog').eq(0).should('contain', 'Blog 2')
        cy.get('.blog').eq(1).should('contain', 'Blog 3')
        cy.get('.blog').eq(2).should('contain', 'Blog 1')
      })
    })
  })
})