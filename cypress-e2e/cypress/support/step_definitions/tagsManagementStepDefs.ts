import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";

import TagsManagementPO from "../../e2e/pageobjects/TagsManagementPO";


Then("user can see tag {string} listed", (content: string)=>{
    TagsManagementPO.getInstance().checkTag(content)
})

Given("user navigate to Manage Tags page", ()=>{
    TagsManagementPO.getInstance().navigateToTags()
})

Given("user click on New Tag", ()=>{
    TagsManagementPO.getInstance().clickOnNewTag()
})



Given("user fill name with {string}", (content: string)=>{
    TagsManagementPO.getInstance().fillTagName(content)
})
When("user click on Create Tag", ()=>{
    TagsManagementPO.getInstance().clickOnCreateTag()
})
// Then flash message appear with type "success" and content "Tag was successfully created.
// And user can see tag "Drama"


When("user can see tag {string}", (name: string)=>{
    TagsManagementPO.getInstance().checkTagName(name)
})

When("user click on Back to tags from the show page", ()=>{
    TagsManagementPO.getInstance().clickBackToTagsShow()
})
// And user can see tag "Drama" listed

Given("user click on show tag {string}", (tag: string)=>{
    TagsManagementPO.getInstance().viewSpecificTag(tag)
})

When("user click on Destroy this tag", ()=>{
    TagsManagementPO.getInstance().deleteTag()
})


Then("tag {string} should not appear in tags list", (tag: string)=>{
    TagsManagementPO.getInstance().checkTagNotAvailable(tag)
})

Then("validation error message appear with content {string}", (content: string)=>{
    TagsManagementPO.getInstance().checkDuplicateErrorMessage(content)
})


Given("user click on edit this tag", ()=>{
    TagsManagementPO.getInstance().clickEditTag()
})

Given("user clear name field", ()=>{
    TagsManagementPO.getInstance().clearNameField()
})
