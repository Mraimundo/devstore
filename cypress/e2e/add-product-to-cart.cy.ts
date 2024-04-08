describe("add product to cart", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should be able to navigate to the product page and add it to the cart", () => {
    cy.get('a[href^="/product"]').first().click();

    cy.url().should("include", "/product");
    // cy.location("pathname").should("include", "/product");
    cy.contains("button", "Adicionar ao carinho").click();

    cy.contains("Cart (1)").should("exist");
  });

  it("should not cout duplicated products on cart", () => {
    cy.get('a[href^="/product"]').first().click();

    cy.url().should("include", "/product");
    // cy.location("pathname").should("include", "/product");

    cy.contains("button", "Adicionar ao carinho").click();
    cy.contains("button", "Adicionar ao carinho").click();

    cy.contains("Cart (1)").should("exist");
  });

  it("should be able to search for a product and add it to the cart", () => {
    cy.get("input[name=q]").type("moletom").parent("form").submit();

    cy.get('a[href^="/product"]').first().click();

    cy.url().should("include", "/product");
    // cy.location("pathname").should("include", "/product");

    cy.contains("button", "Adicionar ao carinho").click();

    cy.contains("Cart (1)").should("exist");
  });
});
