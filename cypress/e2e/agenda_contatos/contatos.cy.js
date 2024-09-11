/// <reference types="cypress" />

describe('Deve testar agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve incluir um contato', () => {
        cy.get('input[type="text"]').type('Maria Silva')
        cy.get('input[type="email"]').type('marisil@teste.com.br')
        cy.get('input[type="tel"]').type('11 12345678')
        cy.get('.adicionar').click()
    })

    it('Deve editar um contato', () => {
        cy.get('.edit').first().click();
        cy.get('input[type="text"]').clear().type('Jose Silva')
        cy.get('input[type="email"]').clear().type('jose@teste.com.br')
        cy.get('input[type="tel"]').type('11 87654321')
        cy.get('.alterar').click()
    })

    it('Deve excluir um contato', () => {
        cy.get('.delete').first().click();
    })
})