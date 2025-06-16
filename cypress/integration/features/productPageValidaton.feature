Feature: Product Page Validation

    Scenario: Verify product title is displayed in product page
        Given user opens website
        Then verify user is on homepage
        When user search for product "Watch"
        Then verify user is on product listing page
        When user click on first product
        Then verify user is on product page
        And verify product title is displayed
