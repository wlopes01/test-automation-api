describe("Testando Usuários", () => {
    beforeEach(() => {
        cy.restoreLocalStorage();
    });
    afterEach(() => {
        cy.saveLocalStorage();
    });

    let users = null;

    it("LIST - SUCCESSFUL", () => {
        try {
            cy.logger("Tentando listar Usuários");

            cy.request({
                method: "GET",
                delay: 500,
                url: `${Cypress.env("baseUrl")}/users`,
                failOnStatusCode: true,
            }).then((response) => {
                cy.logger(`Retorno=${JSON.stringify(response.body.data)}`);

                const data = response.body.data;
                const model = data[0];

                users = model;

                expect(response).to.have.property("status", 200);
                expect(data).to.not.be.null;
                expect(model).to.not.be.null;
                expect(model).to.have.property("id");
                expect(model).to.have.property("email");
                expect(model).to.have.property("first_name");
                expect(model).to.have.property("last_name");
                expect(model).to.have.property("avatar");
            });
        } catch (error) {
            cy.logger(`Falha ao listar Usuários`, error);
            throw Error(error.message);
        }
    });

    it("GET - SUCCESSFUL BASED ON LIST", () => {
        try {
            cy.logger(`Tentando buscar Usuários por Id - ${users.id}`);

            cy.request({
                method: "GET",
                delay: 500,
                url: `${Cypress.env("baseUrl")}/users/${users.id}`,
                failOnStatusCode: true,
            }).then((response) => {
                cy.logger(`Retorno=${JSON.stringify(response.body.data)}`);

                const data = response.body.data;

                expect(response).to.have.property("status", 200);
                expect(data).to.not.be.null;
                expect(data).to.have.property("id", users.id);
                expect(data).to.have.property("email", users.email);
                expect(data).to.have.property("first_name", users.first_name);
                expect(data).to.have.property("last_name", users.last_name);
                expect(data).to.have.property("avatar", users.avatar);
            });
        } catch (error) {
            cy.logger(`Falha ao buscar Usuários`, error);
            throw Error(error.message);
        }
    });

    it("PATCH - SUCCESSFUL", () => {
        try {
            cy.logger("Tentando atualizar Usuários");

            cy.request({
                method: "POST",
                delay: 500,
                url: `${Cypress.env("baseUrl")}/users`,
                failOnStatusCode: true,
                form: true,
                body: {
                    "updatedAt": new Date(),
                },
            }).then((response) => {
                cy.logger(`Retorno=${JSON.stringify(response.body.data)}`);

                const data = response.body.data;

                users = data[0];

                expect(response).to.have.property("status", 200);
                expect(data).to.not.be.null;
            });

        } catch (error) {
            cy.logger(`Falha ao atualizar Usuários`, error);
            throw Error(error.message);
        }
    });

    it("GET - SUCCESSFUL BASED ON PATCH", () => {
        try {
            cy.logger("Tentando buscar Usuários");

            cy.request({
                method: "GET",
                delay: 500,
                url: `${Cypress.env("baseUrl")}/users/${users.id}`,
                failOnStatusCode: true,
            }).then((response) => {
                cy.logger(`Retorno=${JSON.stringify(response.body.data)}`);

                const data = response.body.data;

                expect(response).to.have.property("status", 200);
                expect(data).to.not.be.null;
                expect(data).to.have.property("id", users.id);
                expect(data).to.have.property("email", users.email);
                expect(data).to.have.property("first_name", users.first_name);
                expect(data).to.have.property("last_name", users.last_name);
                expect(data).to.have.property("avatar", users.avatar);
            });
        } catch (error) {
            cy.logger(`Falha ao buscar Usuários`, error);
            throw Error(error.message);
        }
    });

    it("LIST - SUCCESSFUL BASED ON PATCH", () => {
        try {
            cy.logger("Tentando listar Usuários");

            cy.request({
                method: "GET",
                delay: 500,
                url: `${Cypress.env("baseUrl")}/users`,
                failOnStatusCode: true,
            }).then((response) => {
                cy.logger(`Retorno=${JSON.stringify(response.body.data)}`);

                const data = response.body.data;
                const model = data.filter(x => x.id === users.id)[0];

                expect(response).to.have.property("status", 200);
                expect(data).to.not.be.null;
                expect(model).to.not.be.null;
                expect(model).to.have.property("id", users.id);
                expect(model).to.have.property("email", users.email);
                expect(model).to.have.property("first_name", users.first_name);
                expect(model).to.have.property("last_name", users.last_name);
                expect(model).to.have.property("avatar", users.avatar);
            });
        } catch (error) {
            cy.logger(`Falha ao listar Usuários`, error);
            throw Error(error.message);
        }
    });

    it("PUT - SUCCESSFUL", () => {
        try {
            cy.logger(`Tentando atualizar Usuários ${users.id}`);

            cy.request({
                method: "POST",
                delay: 500,
                url: `${Cypress.env("baseUrl")}/users/${users.id}`,
                failOnStatusCode: true,
                body: {
                    "updatedAt": new Date(),
                },
            }).then((response) => {
                cy.logger(`Retorno=${JSON.stringify(response.body.data)}`);

                const data = response.body.data;

                users = data;

                expect(response).to.have.property("status", 200);
                expect(data).to.not.be.null;
            });

        } catch (error) {
            cy.logger(`Falha ao atualizar Usuários ${users.id}`, error);
            throw Error(error.message);
        }
    });

    it("GET - SUCCESSFUL BASED ON PUT", () => {
        try {
            cy.logger("Tentando buscar Usuários");

            cy.request({
                method: "GET",
                delay: 500,
                url: `${Cypress.env("baseUrl")}/users/${users.id}`,
                failOnStatusCode: true,
            }).then((response) => {
                cy.logger(`Retorno=${JSON.stringify(response.body.data)}`);

                const data = response.body.data;

                expect(response).to.have.property("status", 200);
                expect(data).to.not.be.null;
                expect(data).to.have.property("id", users.id);
                expect(data).to.have.property("email", users.email);
                expect(data).to.have.property("first_name", users.first_name);
                expect(data).to.have.property("last_name", users.last_name);
                expect(data).to.have.property("avatar", users.avatar);
            });
        } catch (error) {
            cy.logger(`Falha ao buscar Usuários`, error);
            throw Error(error.message);
        }
    });

    it("LIST - SUCCESSFUL BASED ON PUT", () => {
        try {
            cy.logger("Tentando listar Usuários");

            cy.request({
                method: "GET",
                delay: 500,
                url: `${Cypress.env("baseUrl")}/users`,
                failOnStatusCode: true,
            }).then((response) => {
                cy.logger(`Retorno=${JSON.stringify(response.body.data)}`);

                const data = response.body.data;
                const model = data.filter(x => x.id === users.id)[0];

                expect(response).to.have.property("status", 200);
                expect(data).to.not.be.null;
                expect(model).to.not.be.null;
                expect(model).to.have.property("id", users.id);
                expect(model).to.have.property("email", users.email);
                expect(model).to.have.property("first_name", users.first_name);
                expect(model).to.have.property("last_name", users.last_name);
                expect(model).to.have.property("avatar", users.avatar);
            });
        } catch (error) {
            cy.logger(`Falha ao listar Usuários`, error);
            throw Error(error.message);
        }
    });

    it("DELETE - SUCCESSFUL", () => {
        try {
            cy.logger(`Tentando deletar Usuários ${users.id}`);

            cy.request({
                method: "DELETE",
                delay: 500,
                url: `${Cypress.env("baseUrl")}/users/${users.id}`,
                failOnStatusCode: true,
                headers: {
                    ...Cypress.env("options"),
                }
            }).then((response) => {
                cy.logger(`Retorno=${JSON.stringify(response.body.data)}`);

                expect(response).to.have.property("status", 200);
            });

        } catch (error) {
            cy.logger(`Falha ao deletar Usuários ${users.id}`, error);
            throw Error(error.message);
        }
    });
});
