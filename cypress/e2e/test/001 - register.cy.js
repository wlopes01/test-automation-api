import { KEYS } from "../../support/models";

describe("Teste de Registro de novo usuário", () => {
    beforeEach(() => {
        cy.restoreLocalStorage();
    });
    afterEach(() => {
        cy.saveLocalStorage();
    });

    it("REGISTER - SUCCESSFUL", () => {
        try {
            cy.logger("Tentando registrar novo usuário");

            cy.request({
                method: "POST",
                delay: 500,
                url: `${Cypress.env("baseUrl")}/register`,
                failOnStatusCode: true,
                headers: {
                    ...Cypress.env("options"),
                    "Content-Type": "application/json",
                },
                body: {
                    "username": "Test_automation",
                    "email": "Test_automation@hotmail.com",
                    "password": "teste123"
                },
            }).then((response) => {
                cy.logger(`Retorno=${JSON.stringify(response.body)}`);

                const data = response.body.dados;

                localStorage.setItem(KEYS.AUTH, JSON.stringify(data));

                expect(response).to.have.property("status", 200);
                expect(data).to.not.be.null;
            });

        } catch (error) {
            cy.logger("Falha ao registrar novo usuário", error);
            throw Error(error.message);
        }
    });
});