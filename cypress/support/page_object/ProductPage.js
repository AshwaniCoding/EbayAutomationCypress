class ProductPage{

    get buyNowBtn(){return cy.get("#binBtn_btn_1");}
    get productTitle(){return cy.get("h1.x-item-title__mainTitle");}

}export default ProductPage;