


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



}


export default AuthenticationPO