Feature: Blog management

    Background:
        Given user navigate to login page
        And user fills email "user_1@zenhr.com"
        And user fill password "password"
        And user clicks on Login
        And user is redirected to the home page

    Scenario: user is able to create a blog
        Given user click on Blogs button
        And user click on New blog
        And user fill title "THE BLOG"
        And user fill body "THE BLOG OF ALL BLOGS!"
        And user select tag "Professional"
        When user click on Create Blog  
        Then flash message appear with type "success" and content "Blog was successfully created."
        And user click on Back to Blogs
        And blog "THE BLOG" is listed

    Scenario: user is unable to create a blog without a title
        Given user click on Blogs button
        And user click on New blog
        And user fill body "No title blog :("
        And user select tag "Funny"
        When user click on Create Blog  
        Then blog validation error message appear with content "Title can't be blank"

    Scenario: user is able to edit their personal blog
        Given user click on Blogs button
        And user click on show "THE BLOG" blog
        And user click on Edit This Blog
        And user clear title field
        And user clear body field
        And user fill title "THE EDITED BLOG"
        And user fill body "THE EDITED BLOG OF ALL EDITED BLOGS!"
        And user select tag "Funny"
        When user click on Create Blog  
        Then flash message appear with type "success" and content "Blog was successfully updated."
        And user click on Back to Blogs
        And blog "THE EDITED BLOG" is listed


    Scenario: user is able to destroy their own personal blog
        Given user click on Blogs button
        And user click on show "THE EDITED BLOG" blog
        When user click on Destroy this blog
        Then flash message appear with type "success" and content "Blog was successfully destroyed."
        And blog "THE EDITED BLOG" should not appear in blogs list


