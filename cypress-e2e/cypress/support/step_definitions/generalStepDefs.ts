import GeneralPO from "../../e2e/pageobjects/GeneralPO";
import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";


Then ("flash message appear with type {string} and content {string}", (type: string, message: string)=>{
    GeneralPO.getInstance().checkFlashMessage(type, message)
})


