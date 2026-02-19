import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import BlogsManagementPO from "../../e2e/pageobjects/BlogsManagementPO";


Given("user click on Blogs button", ()=>{
    BlogsManagementPO.getInstance().clickOnBlogs()
})

Given("user click on New blog", ()=>{
    BlogsManagementPO.getInstance().clickOnNewBlog()
})

Given("user fill title {string}", (title: string)=>{
    BlogsManagementPO.getInstance().fillBlogTitle(title)
})

Given("user fill body {string}", (body: string)=>{
    BlogsManagementPO.getInstance().fillBlogBody(body)
})

Given("user select tag {string}", (tag: string)=>{
    BlogsManagementPO.getInstance().checkTag(tag)
})

Given("user clear title field",()=>{
    BlogsManagementPO.getInstance().clearBlogTitle()
})
Given("user clear body field",()=>{
    BlogsManagementPO.getInstance().clearBlogBody()
})

Given("user click on show {string} blog", (blog: string)=>{
    BlogsManagementPO.getInstance().viewSpecificBlog(blog)
})
Given("user click on Edit This Blog", ()=>{
    BlogsManagementPO.getInstance().clickEditBlog()
})


When("user click on Destroy this blog", ()=>{
    BlogsManagementPO.getInstance().destroyBlog()
})


When("user click on Create Blog", ()=>{
    BlogsManagementPO.getInstance().clickCreateBlog()
})

When("blog {string} is listed", (blog: string)=>{
    BlogsManagementPO.getInstance().checkListedBlog(blog)
})

When("user click on Back to Blogs", ()=>{
    BlogsManagementPO.getInstance().clickBackToBlogs()
})


Then("blog validation error message appear with content {string}", (content: string)=>{
    BlogsManagementPO.getInstance().checkValidationMessage(content)
})

Then("blog {string} should not appear in blogs list", (blog: string)=>{
    BlogsManagementPO.getInstance().blogDoesntExist(blog)
})

Then("edit this blog button shouldn't appear",()=>{
    BlogsManagementPO.getInstance().editButtonDoesntExist()
})
Then("destroy this blog button shouldn't appear",()=>{
    BlogsManagementPO.getInstance().destroyButtonDoesntExist()
})
