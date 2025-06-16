import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../page_object/HomePage";

Given("user opens website",function(){
    this.homePage = new HomePage();
    this.homePage.openWebsite();
})

Then("verify user is on homepage",function(){
    this.homePage.signInBtn.should("be.visible");
})

When("user search for product {string}",function(productName){
    this.productListingPage = this.homePage.searchProduct(productName);
})

When("user click on sign in button",function(){
    this.signInPage = this.homePage.clickOnSignInBtn();
})

Then("verify user logged in",function(){

})