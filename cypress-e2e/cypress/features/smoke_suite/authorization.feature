Feature: Manage Tags Authorization

    Scenario: Verify admin can manage Tags
        Given user navigate to login page
        And user fills email "admin@zenhr.com"
        And user fill password "password"
        When user clicks on Login
        Then user is redirected to the home page
        And user has Manage Tags button
        And user can click on Manage Tags button
        And user is redirected to Tags page

    Scenario: Verify users cannot see manage tags
        Given user navigate to login page
        And user fills email "user_1@zenhr.com"
        And user fill password "password"
        When user clicks on Login
        Then user is redirected to the home page
        And user does not have Manage Tags button

    Scenario: Verify users cannot navigate to manage tags page
        Given user navigate to login page
        And user fills email "user_1@zenhr.com"
        And user fill password "password"
        And user clicks on Login
        And user is redirected to the home page
        When user navigates to manage tags page
        Then flash message appear with content "Not Authorized"
