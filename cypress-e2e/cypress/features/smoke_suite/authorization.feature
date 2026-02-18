Feature: Manage Tags Authorization

    Scenario: Verify admin can manage Tags
        Given user navigate to login page
        And user fills email "admin@zenhr.com"
        And user fill password "password"
        When user clicks on Login
        Then user is redirected to the home page
        And user has Manage Tags button

        
