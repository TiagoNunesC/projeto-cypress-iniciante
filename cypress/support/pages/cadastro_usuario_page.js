/// <reference types="cypress"/>

import { should } from "chai";

export default {
    clicarCadastrar() {
        cy.get('#btnRegister')
            .click();
    },  
    
    // validarMensagemErro() {
    //     cy.get('.errorLabel')
    //         .then((element) => {
    //             expect(element).to.be.visible
    //             expect(element.text()).eq('')
    //         })
    // },

    validarMensagemErro(mensagem) {
        cy.get('.errorLabel')
            .should('be.visible')
            .should('have.text', mensagem);
    },

    preencheNome(nome) {
        cy.get('#user')
            .type(nome);
    },

    preencheEmail(email) {
        cy.get('#email')
            .type(email)
    },

    preencheSenha(senha) {
        cy.get('#password')
            .type(senha)
    },

    validarMensagemSucesso(nome) {
        cy.get('#swal2-title')
        cy.get('#swal2-html-container')
            should('have.text', `Bem-vindo ${nome}`);
    }
};
