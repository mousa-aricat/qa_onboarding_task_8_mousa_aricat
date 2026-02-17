import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import AuthenticationPO from "cypress/e2e/pageobjects/AuthenticationPO";


Given("user navigate to login page", ()=>{
    AuthenticationPO.getInstance().navigate()
})