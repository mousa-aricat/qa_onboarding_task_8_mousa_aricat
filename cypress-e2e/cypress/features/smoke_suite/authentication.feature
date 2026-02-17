Feature: Authentication Smoke

    Scenario: Verify that user login is working
        Given user navigate to login page
        When user fill "user 1" email
        And user fill "user 1" password
        Then flash message appear with content "Login Successful"
        And user is redirected to dashboard