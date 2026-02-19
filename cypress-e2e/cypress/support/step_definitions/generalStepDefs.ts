import GeneralPO from "../../e2e/pageobjects/GeneralPO";
import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";


Then ("flash message appear with content {string}", (message: string)=>{
    GeneralPO.getInstance().checkFlashMessage(message)
})

