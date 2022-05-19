///<reference types="cypress" />

describe('cadastro', function () {
    //descrive - define a suite de teste
    beforeEach(function () {
        cy.visit('./formulario.html')
    })

    it('verifica o título da aplicação', function () {
        
        cy.title().should('be.equal', 'Cadastro')
    })
    
    it('Preenche as informações obrigatórias do formulário', function () {
        
        cy.get('#nome')
            .type('Sel Silva')
            .should('have.class', 'input')
        
        cy.get('#email')
            .type('sel.ber@live.com')
            .should('have.class', 'input')
      
        cy.get('#senha')
            .type('ASdfg123')
             .should('have.class', 'input')

        cy.get('#dataNascimento')
            .type('1972-04-10')
            .should('have.class', 'input')
            
           
        cy.get('#cpf')
            .type('123.654.987-12')
            .should('have.class', 'input')

        cy.get('#cep')
            .type('76550-123')
            .should('have.class', 'input')

        cy.get('#logradouro')
            .type('A. Goiás, 204, Setor Aeroporto')
            .should('have.class', 'input')

        cy.get('#cidade')
            .type('Porangatu')
            .should('have.class', 'input')

        cy.get('#estado')
            .type('GO')
            .should('have.class', 'input')
    
       cy.contains('button', 'Cadastrar')
            .click()
              
    })
})