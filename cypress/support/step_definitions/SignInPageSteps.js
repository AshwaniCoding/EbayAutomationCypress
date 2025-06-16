import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"

Then("verify user is on sign in page",function(){
    this.signInPage.continueSignInBtn.should("be.visible");
})

When("user fill login details", function(){
    this.signInPage.fillLoginDetails(this.data.email,this.data.pass);
})

When("click on sign in button", function(){
    this.homepage = this.signInPage.clickOnSignInBtn();
})