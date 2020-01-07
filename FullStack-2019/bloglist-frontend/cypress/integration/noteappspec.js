describe('Blog App ', function() {
  beforeEach(function() {
    cy.visit("http://localhost:3000")
  })

  it('front page can be opened', function() {
    cy.contains('Blogs')
  })


  it('Able to login and create a new blog', function() {
    cy.get("#usernameLogin")
      .type("mluukkai")
    cy.get("#passwordLogin")
      .type("salainen")
    cy.contains("Login")
      .click()
    cy.contains("Logged in as mluukkai")

    cy.wait(2000)

    cy.contains("New Post")
      .click()
    cy.get("#title")
      .type("New Blog For Testing!")
    cy.get("#author")
      .type("TestUser")
    cy.get("#url")
      .type("www.testing.com")
    cy.get("#Create")
      .click()
    cy.contains("New Post Made!")
  })


})