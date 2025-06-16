import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then("verify user is on product page",function(){
    this.productPage.buyNowBtn.should("be.visible");
}) 

Then("verify product title is displayed",function(){
    this.productPage.productTitle.should("be.visible");
})