//Classe responsavel por mapear os objetos da pagina login

class login_page {

    element= { 

    useremail:() => cy.get("#=email"),

    userpassword:() => cy.get("#=password"),

    btnEntrar : () => cy.xpath("//button[@type='submit']"),

    linkcadastro : () => cy.xpath("//button[@type='submit']")
}

imputCampEmail()

{
    this.element.useremail().type()
    
}

}
