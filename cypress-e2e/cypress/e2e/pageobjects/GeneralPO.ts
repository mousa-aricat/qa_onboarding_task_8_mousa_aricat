import GeneralLocators from "../locators/GeneralLocators";
import AuthorizationPO from "./AuthorizationPO";

class GeneralPO{
    public static instance: GeneralPO
    public static getInstance(): GeneralPO{

        if(this.instance == null){
            this.instance = new GeneralPO()
        }
        return this.instance
    }


    public checkFlashMessage(message: string): void{
        cy.get(GeneralLocators.FLASH_MESSAGE_LOCATOR).first().should('contain', message)
    }
}

export default GeneralPO