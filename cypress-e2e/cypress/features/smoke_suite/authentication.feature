Feature: Authentication Smoke

    Scenario: Verify that user successfull login is working
        Given user navigate to login page
        And user fills email "user_1@zenhr.com"
        And user fill password "password"
        When user clicks on Login
        Then user is redirected to the home page
        And flash message appear with content "Login Successful"

    Scenario: Wrong login gives flash message
        Given user navigate to login page
        And user fills email "user_1@zenhr.com"
        And user fill password "test1234"
        When user clicks on Login
        Then url didn't change
