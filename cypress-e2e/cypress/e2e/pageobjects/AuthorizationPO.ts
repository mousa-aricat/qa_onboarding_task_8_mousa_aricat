import AuthorizationLocators from "../locators/AuthorizationLocators"

class AuthorizationPO{

    public static instance: AuthorizationPO
    public static getInstance(): AuthorizationPO{
        if(this.instance == null){
            this.instance = new AuthorizationPO()
        }
        return this.instance
    }

    
    public navigateToTags():void {
        cy.visit("/tags")
    }
    public checkManageTags(): void{
        cy.get(AuthorizationLocators.MANAGE_TAGS_BUTTON_LOCATOR).should('exist')
    }   

    public checkNoManageTags(): void{
        cy.get(AuthorizationLocators.MANAGE_TAGS_BUTTON_LOCATOR).should('not.exist')
    }

    public clickOnManageTags(): void{
        cy.get(AuthorizationLocators.MANAGE_TAGS_BUTTON_LOCATOR).click()
    }
    public checkManageTagsURL(): void{
        cy.url().should('eq', 'http://localhost:3000/tags')
    }
    
}

export default AuthorizationPO