import TagsManagementLocators from "../locators/TagsManagementLocators"

class TagsManagementPO{
    public static instance: TagsManagementPO
    public static getInstance(): TagsManagementPO{
        if(this.instance == null){
            this.instance = new TagsManagementPO()
        }
        return this.instance
    }

    public checkTag(content: string): void{
        cy.get(TagsManagementLocators.TAGS_LOCATOR).should('contain', content)
        cy.wait(500)

    }

    public navigateToTags(): void{
        cy.visit("/tags")
        cy.wait(500)
    }

    public clickOnNewTag():void{
        cy.get(TagsManagementLocators.NEW_TAG_BUTTON_LOCATOR).click()
        cy.wait(500)

    }

    public fillTagName(content: string): void{
        cy.get(TagsManagementLocators.NEW_TAG_INPUT_FIELD_LOCATOR).type(content)
        cy.wait(500)
    }

    public clickOnCreateTag(): void{
        cy.get(TagsManagementLocators.CREATE_TAG_BUTTON_LOCATOR).click()
        cy.wait(500)
    }

    public clickOnBackToTags(): void{
        cy.get(TagsManagementLocators.BACK_TO_TAGS_LOCATOR).click()
        cy.wait(500)
    }

    public checkTagName(name:string): void{
        cy.get(TagsManagementLocators.TAG_NAME_LOCATOR).should('contain', name)
        cy.wait(500)
    }

    public clickBackToTagsShow(): void{
        cy.get(TagsManagementLocators.BACK_TO_TAGS_SHOW_LOCATOR).click()
        cy.wait(500)
    }

    public viewSpecificTag(tag: string): void{
        cy.wait(500)
        cy.contains(TagsManagementLocators.TAG_NAME_LOCATOR, tag).next('p').find('a').click()
        cy.wait(1000)
    }

    public deleteTag(): void{
        cy.get(TagsManagementLocators.DELETE_TAG_LOCATOR).click()
        cy.wait(500)
    }

    public checkTagNotAvailable(tag: string): void{
        cy.contains(TagsManagementLocators.TAG_NAME_LOCATOR, tag).should('not.exist')
    }

    public checkDuplicateErrorMessage(content):void{
        cy.get(TagsManagementLocators.DUPLICATE_TAG_ERROR_LOCATOR).should("contain", content)

    }

    public clickEditTag(): void{
        cy.get(TagsManagementLocators.EDIT_TAG_LOCATOR).click()
        cy.wait(1000)
    }

    public clearNameField(): void{
        cy.get(TagsManagementLocators.NEW_TAG_INPUT_FIELD_LOCATOR).clear()
        cy.wait(500)
    }
}



export default TagsManagementPO