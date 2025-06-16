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

    async clickOnSignInBtn(){

        let updatedUrl;
        await this.signInBtn.then((ele)=>{
            updatedUrl = ele.prop("href");
        });
        await cy.visit(updatedUrl);
        await cy.origin(updatedUrl);

        return new SignInPage();
    }
    
    

}export default HomePage;