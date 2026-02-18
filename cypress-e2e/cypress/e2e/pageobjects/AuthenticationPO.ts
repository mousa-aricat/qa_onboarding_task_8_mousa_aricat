import AuthenticationLocators from "../locators/AuthenticationLocators"


class AuthenticationPO{
        public static instance: AuthenticationPO
        public static getInstance(): AuthenticationPO{
            if(this.instance == null){
                this.instance = new AuthenticationPO()
            }
            return this.instance
        }
        
    public navigate(): void{
        cy.visit("/sessions/new")
    }

    public fillEmail(email: string): void{
        cy.get(AuthenticationLocators.EMAIL_FIELD_LOCATOR).type(email)
    }

    public fillPassword(password: string): void{
        cy.get(AuthenticationLocators.PASSWORD_FIELD_LOCATOR).type(password)
    }

    public login(): void{
        cy.get(AuthenticationLocators.LOGIN_BUTTON_LOCATOR).click()
        cy.wait(1000)
    }

    public checkMainPage(): void{
        cy.url().should('eq', "http://localhost:3000/dashboard")
    }


    public checkSuccessFlashMessage(type: string, message: string): void{
        cy.get(AuthenticationLocators.FLASH_MESSAGE_LOCATOR).first().should('contain', message)
    }


}


export default AuthenticationPO