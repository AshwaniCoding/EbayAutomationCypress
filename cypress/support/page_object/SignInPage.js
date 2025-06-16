import HomePage from "./HomePage";

class SignInPage{

    get signInLabel(){return cy.contains(".signin-intro h1");}
    get userIdInput(){return cy.get("#userid");}
    get continueSignInBtn(){return cy.get("#signin-continue-btn");}
    get passInput(){return cy.get("#pass");}
    get signInBtn(){return cy.get("#sgnBt");}
    get skipForNowBtn(){return cy.get("#passkeys-cancel-btn");}
    get userNameLabel(){return cy.get(".gh-identity__greeting");}

    fillLoginDetails(username,password){

        this.userIdInput.type(username);
        this.continueSignInBtn.click();
        this.passInput.type(password);

    }

    clickOnSignInBtn(){

        this.signInBtn.click();
        return new HomePage();

    }

}
export default SignInPage;