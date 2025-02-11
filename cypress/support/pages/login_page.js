/// <reference types="cypress" />

import { should } from "chai";

export default {
    clicarLogin() {
        cy.get('#btnLogin')
            .click()
    },

    validarMensagemErro(mensagem) {
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', mensagem);
    },

    preencheEmail(email) {
        cy.get('#user')
            .type(email);
    },
    
    preencherSenha(senha) {
        cy.get('#password')
            .type(senha);
    },
    
    marcarCheckbox() {
        cy.get('.form-check-input')
            .check()
            .should('be.checked');
    },

    validarMensagemSucesso(email) {
        cy.get('#swal2-title')
            .should('be.visible')

        cy.get('#swal2-html-container')
            should('have.text', `Olá, ${email}`);
    }


}