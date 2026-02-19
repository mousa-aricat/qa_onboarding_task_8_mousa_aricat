import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import AuthenticationPO from "../../e2e/pageobjects/AuthenticationPO";
import GeneralPO from "../../e2e/pageobjects/GeneralPO";

Given("user navigate to login page", ()=>{
    AuthenticationPO.getInstance().navigate()
})

Given ("user fills email {string}", (email: string)=>{
    AuthenticationPO.getInstance().fillEmail(email)
})

Given ("user fill password {string}", (password: string)=>{
    AuthenticationPO.getInstance().fillPassword(password)
})
When ("user clicks on Login", ()=>{
    AuthenticationPO.getInstance().login()
})


Then ("user is redirected to the home page",() =>{
    AuthenticationPO.getInstance().checkMainPage()
})

Then("url didn't change", ()=>{
    AuthenticationPO.getInstance().checkURL()
})

