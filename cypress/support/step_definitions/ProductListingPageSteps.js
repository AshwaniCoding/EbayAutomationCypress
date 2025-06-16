import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Then("verify user is on product listing page", function(){
    this.productListingPage.categoryLabel.should("have.text","Category");
})

When("user click on first product",function(){
    this.productPage = this.productListingPage.clickOnProduct(1);
})