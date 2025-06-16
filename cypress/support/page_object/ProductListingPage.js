import ProductPage from "./ProductPage";

class ProductListingPage{

    get productCards(){return cy.get("ul.srp-results div.s-item__image-wrapper").parent();}
    get categoryLabel(){return cy.contains("Category");}

    clickOnProduct(productNumber){
        cy.wait(2000);
        this.productCards.eq(productNumber).invoke("removeAttr", "target").parent().click();
        return new ProductPage();
    }

}export default ProductListingPage;