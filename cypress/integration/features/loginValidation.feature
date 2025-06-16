Feature: Validate Login Functionality

    Scenario: Verify user can login with valid functionality
        Given user opens website
        Then verify user is on homepage
        When user click on sign in button
        Then verify user is on sign in page
        When user fill login details
        And click on sign in button
        Then verify user logged in
        And verify user is on home page

