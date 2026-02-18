import AuthorizationLocators from "../locators/AuthorizationLocators"

class AuthorizationPO{

    public static instance: AuthorizationPO
    public static getInstance(): AuthorizationPO{
        if(this.instance == null){
            this.instance = new AuthorizationPO()
        }
        return this.instance
    }

    public checkManageTags(): void{
        cy.get(AuthorizationLocators.MANAGE_TAGS_BUTTON_LOCATOR).should('exist')
    }
    
}

export default AuthorizationPO