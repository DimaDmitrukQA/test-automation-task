export class url{
main(){
    cy.visit('https://www.pecodesoftware.com/qa-portal/greet.php')
}
new_main(){
    cy.url().should('eq', 'https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php')
}
}

export const urls = new url()