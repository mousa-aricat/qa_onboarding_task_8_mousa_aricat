Feature: tag management

    Background:
        Given user navigate to login page
        And user fills email "admin@zenhr.com"
        And user fill password "password"
        And user clicks on Login
        And user is redirected to the home page

    
    
    Scenario: Admin users listing tags
        When user can click on Manage Tags button
        Then user can see tag "Funny" listed
        And user can see tag "Professional" listed


    Scenario: Admin can create new tags
        Given user navigate to Manage Tags page
        And user click on New Tag
        And user fill name with "Drama"
        When user click on Create Tag
        Then flash message appear with type "success" and content "Tag was successfully created."
        And user can see tag "Drama"
        And user click on Back to tags from the show page
        And user can see tag "Drama" listed

    Scenario: Admin can delete tags
        Given user navigate to Manage Tags page
        And user click on show tag "Drama"
        When user click on Destroy this tag
        # And user click ok on confirmation message
        Then flash message appear with type "success" and content "Tag was successfully destroyed."
        And tag "Drama" should not appear in tags list