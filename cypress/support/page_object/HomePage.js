import ProductListingPage from "./ProductListingPage";
import SignInPage from "./SignInPage";

class HomePage{

    get searchInput(){return cy.get("input[placeholder*='Search for anything']");}
    get searchBtn(){return cy.get("#gh-search-btn");}
    get signInBtn(){return cy.get(".gh-identity span a");}

    openWebsite(){
        cy.visit(Cypress.env("url"));
    }

    searchProduct(productName){
        this.searchInput.type(productName);
        this.searchBtn.click();
        return new ProductListingPage();
    }

    clickOnSignInBtn(){
        this.signInBtn.eq(0).click();
        return new SignInPage();
    }
    
    

}export default HomePage;