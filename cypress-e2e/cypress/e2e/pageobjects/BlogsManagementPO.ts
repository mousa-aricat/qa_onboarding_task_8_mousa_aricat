import BlogsManagementLocators from "../locators/BlogsManagementLocators"

class BlogsManagementPO{

    public static instance: BlogsManagementPO
    public static getInstance(): BlogsManagementPO{
        if(this.instance == null){
            this.instance = new BlogsManagementPO()
        }
        return this.instance
    }

    public clickOnBlogs():void{
        cy.get(BlogsManagementLocators.BLOGS_BUTTON_LOCATOR).click()
        cy.wait(500)
    }
    public clickOnNewBlog():void{
        cy.get(BlogsManagementLocators.NEW_BLOG_BUTTON).click()
        cy.wait(500)
    }

    public fillBlogTitle(title: string): void{
        cy.get(BlogsManagementLocators.TITLE_FIELD_LOCATOR).type(title)
        cy.wait(750)
    }

    public clearBlogTitle(): void{
        cy.get(BlogsManagementLocators.TITLE_FIELD_LOCATOR).clear()
        cy.wait(500)
    }

    public clearBlogBody(): void{
        cy.get(BlogsManagementLocators.BODY_FIELD_LOCATOR).clear()
        cy.wait(500)
    }
    public fillBlogBody(body: string): void{
        cy.get(BlogsManagementLocators.BODY_FIELD_LOCATOR).type(body)
        cy.wait(750)
    }

    public checkTag(tag: string): void{
        cy.get(BlogsManagementLocators.TAGS_CHECK_BOX).contains('label', tag).click()
        cy.wait(500)
    }
    
    public clickCreateBlog():void{
        cy.get(BlogsManagementLocators.CREATE_BLOG_BUTTON_LOCATOR).click()
        cy.wait(500)
    }

    public checkListedBlog(blog: string): void{
        cy.get(BlogsManagementLocators.BLOGS_LIST_LOCATOR).should('contain', blog)
    }

    public clickBackToBlogs():void{
        cy.get(BlogsManagementLocators.BACK_TO_BLOGS_LOCATOR).click()
    }

    public checkValidationMessage(content):void{
        cy.get(BlogsManagementLocators.BLOG_VALIDATION_ERROR_LOCATOR).should("contain", content)

    }

    public viewSpecificBlog(blog: string): void{
        cy.contains(BlogsManagementLocators.SPECIFIC_BLOG_LOCATOR, blog).next('p').find('a').click()
        cy.wait(1500)
    }

    public clickEditBlog(): void{
        cy.get(BlogsManagementLocators.EDIT_BLOG_LOCATOR).click()
        cy.wait(500)
    }

    public destroyBlog(): void{
        cy.get(BlogsManagementLocators.DESTROY_BLOG_LOCATOR).click()
        cy.wait(500)
    }

    public blogDoesntExist(blog: string): void{
        cy.contains(BlogsManagementLocators.SPECIFIC_BLOG_LOCATOR, blog).should('not.exist')
        cy.wait(500)
    }


}

export default BlogsManagementPO