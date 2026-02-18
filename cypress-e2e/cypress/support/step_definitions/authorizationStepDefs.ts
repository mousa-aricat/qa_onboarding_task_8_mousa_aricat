import AuthorizationPO from "../../e2e/pageobjects/AuthorizationPO";


import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";

Then("user has Manage Tags button", ()=>{
    AuthorizationPO.getInstance().checkManageTags()
})

Then("user does not have Manage Tags button", ()=>{
    AuthorizationPO.getInstance().checkNoManageTags()
})


When("user navigates to manage tags page", ()=>{
    AuthorizationPO.getInstance().navigateToTags()
})



Then("user can click on Manage Tags button",()=>{
    AuthorizationPO.getInstance().clickOnManageTags()
})


Then("user is redirected to Tags page", ()=>{
    AuthorizationPO.getInstance().navigateToTags()
})
