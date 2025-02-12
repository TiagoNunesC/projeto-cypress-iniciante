/// <reference types="cypress"/>

import { fa, faker, fakerTH } from "@faker-js/faker";
import commum_page from "../support/pages/commum_page";
import login_page from "../support/pages/login_page";

describe('Login', () => {

    beforeEach('Acessar tela de login', () => {
        commum_page.acessarLoginUsuario();
    });

    it('Campo de E-mail vazio', () => {
        login_page.clicarLogin();
        login_page.validarMensagemErro('E-mail inválido.');
    });

    it('Campo E-mail inválido', () => {
        login_page.preencheEmail(faker.person.firstName());
        login_page.clicarLogin();
        login_page.validarMensagemErro('E-mail inválido.')
    });

    it('Campo senha vazio', () => {
        login_page.preencheEmail(faker.internet.email());
        login_page.clicarLogin();
        login_page.validarMensagemErro('Senha inválida.');
    });

    it('Campo senha incorreta', () => {
        login_page.preencheEmail(faker.internet.email());
        login_page.preencherSenha('123');
        login_page.clicarLogin();
        login_page.validarMensagemErro('Senha inválida.');

    })

    it('Login com sucesso', () => {
        const email = faker.internet.email()
        
        login_page.preencheEmail(email);
        login_page.preencherSenha(faker.internet.password());
        login_page.marcarCheckbox();
        login_page.clicarLogin();
        login_page.validarMensagemSucesso(email);
        
    })
}) 