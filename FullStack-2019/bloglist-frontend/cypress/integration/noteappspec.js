describe('Blog App ', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'Matti Luukkainen',
      username: 'mluukkai',
      password: 'salainen'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('Blogs')
  })

  describe('Able to login', function() {

    beforeEach(function () {
      cy.get("#usernameLogin")
        .type("mluukkai")
      cy.get("#passwordLogin")
        .type("salainen")
      cy.contains("Login")
        .click()
      cy.contains("Logged in as mluukkai")
    })


    it("Able to create a new blog and like it", function () {
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

      /*Didn't get come up with a more elegant solution after searching for a while*/
      cy.visit('http://localhost:3000')
      cy.contains(", by")
        .click()
      cy.contains("Like")
        .click()
      cy.get("p").eq(1)
        .should("contain", "1 likes")

    })

    it ("Able to logout", function () {
      cy.contains("Logout")
        .click()
      cy.contains("#usernameLogin")
        .and("not.be.disabled")
    })

  })

})