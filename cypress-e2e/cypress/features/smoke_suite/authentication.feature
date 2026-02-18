Feature: Authentication Smoke

    Scenario: Verify that user successfull login is working
        Given user fills email "user_1@zenhr.com"
        And user fill password "password"
        When user clicks on Login
        Then user is redirected to the home page
        And flash message appear with type "success" and content "Login Successful"

