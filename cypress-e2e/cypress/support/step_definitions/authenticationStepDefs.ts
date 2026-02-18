import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import AuthenticationPO from "../../e2e/pageobjects/AuthenticationPO";


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

Then ("flash message appear with type {string} and content {string}", (type: string, message: string)=>{
    AuthenticationPO.getInstance().checkSuccessFlashMessage(type, message)
})
