import AuthorizationPO from "../../e2e/pageobjects/AuthorizationPO";
import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";

Then("user has Manage Tags button", ()=>{
    AuthorizationPO.getInstance().checkManageTags()
})