import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"

Then("verify user is on sign in page",function(){
    

    cy.url().should("include", "signin.ebay.com").then((url) => {
        const origin = new URL(url).origin;
    
        cy.origin(origin, () => {
        //   const SignInPage = require("../page_object/SignInPage").default;
        //   const signInPage = new SignInPage();
    
        //   signInPage.fillLoginDetails(email, pass);
        this.signInPage.signInLabel.should("be.visible");
        });
      });

})

When("user fill login details", function(){
    // this.signInPage.fillLoginDetails(this.data.email,this.data.pass);

    cy.url().should("include", "signin.ebay.com").then((url) => {
        const origin = new URL(url).origin;
    
        cy.origin(origin, { args: { email: this.data.email, pass: this.data.pass } }, ({ email, pass }) => {
          const SignInPage = require("../page_object/SignInPage").default;
          const signInPage = new SignInPage();
    
          signInPage.fillLoginDetails(email, pass);
        });
      });

})

When("click on sign in button", function(){

    cy.url().should("include", "signin.ebay.com").then((url) => {
        const origin = new URL(url).origin;
    
        cy.origin(origin, () => {
          const SignInPage = require("../page_object/SignInPage").default;
          const signInPage = new SignInPage();
    
          signInPage.clickOnSignInBtn(); // clicks login
        });
      });

    // this.homepage = this.signInPage.clickOnSignInBtn();
})