/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

import commum_page from '../support/pages/commum_page';
import cadastro_page from '../support/pages/cadastro_usuario_page';

describe('Cadastro de usuário', () => {

    beforeEach('Acessar cadastro de usuário', () => {
        commum_page.acessarCadastroUsuario()
    });

    it('Campo nome vazio', () => {
        cadastro_page.clicarCadastrar();
        cadastro_page.validarMensagemErro('O campo nome deve ser prenchido');
    });

    it('Campo E-mail vazio', () => {
        cadastro_page.preencheNome(faker.person.fullName());
        cadastro_page.clicarCadastrar();
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    });

    it('Campo E-mail inválido', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.preencheEmail(faker.person.jobDescriptor());
        cadastro_page.clicarCadastrar();
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente');
        
    });

    it('Campo senha vazio', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.preencheEmail(faker.internet.email());
        cadastro_page.clicarCadastrar();
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos');
    });

    it('Campo senha inválido', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.preencheEmail(faker.internet.email());
        cadastro_page.preencheSenha('123')
        cadastro_page.clicarCadastrar();
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos');
    });

    it('Cadastro com sucesso', () => {
        const nome = faker.person.fullName();

        cadastro_page.preencheNome(nome);
        cadastro_page.preencheEmail(faker.internet.email());
        cadastro_page.preencheSenha(faker.internet.password());
        cadastro_page.clicarCadastrar();
        cadastro_page.validarMensagemSucesso(nome) 
    });
});