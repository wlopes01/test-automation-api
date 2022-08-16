describe("Testando Unknown", () => {
    beforeEach(() => {
        cy.restoreLocalStorage();
    });
    afterEach(() => {
        cy.saveLocalStorage();
    });

    let unknown = null;

    it("LIST - SUCCESSFUL", () => {
        try {
            cy.logger("Tentando listar Unknown");

            cy.request({
                method: "GET",
                delay: 500,
                url: `${Cypress.env("baseUrl")}/unknown`,
                failOnStatusCode: true,
            }).then((response) => {
                cy.logger(`Retorno=${JSON.stringify(response.body.data)}`);

                const data = response.body.data;
                const model = data[0];

                unknown = model;

                expect(response).to.have.property("status", 200);
                expect(data).to.not.be.null;
                expect(model).to.not.be.null;
                expect(model).to.have.property("id");
                expect(model).to.have.property("name");
                expect(model).to.have.property("year");
                expect(model).to.have.property("color");
                expect(model).to.have.property("pantone_value");
            });
        } catch (error) {
            cy.logger(`Falha ao listar Unknown`, error);
            throw Error(error.message);
        }
    });

    it("GET - SUCCESSFUL BASED ON LIST", () => {
        try {
            cy.logger(`Tentando buscar Unknown por Id - ${unknown.id}`);

            cy.request({
                method: "GET",
                delay: 500,
                url: `${Cypress.env("baseUrl")}/unknown/${unknown.id}`,
                failOnStatusCode: true,
            }).then((response) => {
                cy.logger(`Retorno=${JSON.stringify(response.body.data)}`);

                const data = response.body.data;

                expect(response).to.have.property("status", 200);
                expect(data).to.not.be.null;
                expect(data).to.have.property("id", unknown.id);
                expect(data).to.have.property("name", unknown.name);
                expect(data).to.have.property("year", unknown.year);
                expect(data).to.have.property("color", unknown.color);
                expect(data).to.have.property("pantone_value", unknown.pantone_value);
            });
        } catch (error) {
            cy.logger(`Falha ao buscar Unknown`, error);
            throw Error(error.message);
        }
    });

    it("PATCH - SUCCESSFUL", () => {
        try {
            cy.logger("Tentando atualizar Unknown");

            cy.request({
                method: "POST",
                delay: 500,
                url: `${Cypress.env("baseUrl")}/unknown`,
                failOnStatusCode: true,
                form: true,
                body: {
                    "updatedAt": new Date(),
                },
            }).then((response) => {
                cy.logger(`Retorno=${JSON.stringify(response.body.data)}`);

                const data = response.body.data;

                unknown = data[0];

                expect(response).to.have.property("status", 200);
                expect(data).to.not.be.null;
            });

        } catch (error) {
            cy.logger(`Falha ao atualizar Unknown`, error);
            throw Error(error.message);
        }
    });

    it("GET - SUCCESSFUL BASED ON PATCH", () => {
        try {
            cy.logger("Tentando buscar Unknown");

            cy.request({
                method: "GET",
                delay: 500,
                url: `${Cypress.env("baseUrl")}/unknown/${unknown.id}`,
                failOnStatusCode: true,
            }).then((response) => {
                cy.logger(`Retorno=${JSON.stringify(response.body.data)}`);

                const data = response.body.data;

                expect(response).to.have.property("status", 200);
                expect(data).to.not.be.null;
                expect(data).to.have.property("id", unknown.id);
                expect(data).to.have.property("name", unknown.name);
                expect(data).to.have.property("year", unknown.year);
                expect(data).to.have.property("color", unknown.color);
                expect(data).to.have.property("pantone_value", unknown.pantone_value);
            });
        } catch (error) {
            cy.logger(`Falha ao buscar Unknown`, error);
            throw Error(error.message);
        }
    });

    it("LIST - SUCCESSFUL BASED ON PATCH", () => {
        try {
            cy.logger("Tentando listar Unknown");

            cy.request({
                method: "GET",
                delay: 500,
                url: `${Cypress.env("baseUrl")}/unknown`,
                failOnStatusCode: true,
            }).then((response) => {
                cy.logger(`Retorno=${JSON.stringify(response.body.data)}`);

                const data = response.body.data;
                const model = data.filter(x => x.id === unknown.id)[0];

                expect(response).to.have.property("status", 200);
                expect(data).to.not.be.null;
                expect(model).to.not.be.null;
                expect(model).to.have.property("id", unknown.id);
                expect(model).to.have.property("name", unknown.name);
                expect(model).to.have.property("year", unknown.year);
                expect(model).to.have.property("color", unknown.color);
                expect(model).to.have.property("pantone_value", unknown.pantone_value);
            });
        } catch (error) {
            cy.logger(`Falha ao listar Unknown`, error);
            throw Error(error.message);
        }
    });

    it("PUT - SUCCESSFUL", () => {
        try {
            cy.logger(`Tentando atualizar Unknown ${unknown.id}`);

            cy.request({
                method: "POST",
                delay: 500,
                url: `${Cypress.env("baseUrl")}/unknown/${unknown.id}`,
                failOnStatusCode: true,
                body: {
                    "updatedAt": new Date(),
                },
            }).then((response) => {
                cy.logger(`Retorno=${JSON.stringify(response.body.data)}`);

                const data = response.body.data;

                unknown = data;

                expect(response).to.have.property("status", 200);
                expect(data).to.not.be.null;
            });

        } catch (error) {
            cy.logger(`Falha ao atualizar Unknown ${unknown.id}`, error);
            throw Error(error.message);
        }
    });

    it("GET - SUCCESSFUL BASED ON PUT", () => {
        try {
            cy.logger("Tentando buscar Unknown");

            cy.request({
                method: "GET",
                delay: 500,
                url: `${Cypress.env("baseUrl")}/unknown/${unknown.id}`,
                failOnStatusCode: true,
            }).then((response) => {
                cy.logger(`Retorno=${JSON.stringify(response.body.data)}`);

                const data = response.body.data;

                expect(response).to.have.property("status", 200);
                expect(data).to.not.be.null;
                expect(data).to.have.property("id", unknown.id);
                expect(data).to.have.property("name", unknown.name);
                expect(data).to.have.property("year", unknown.year);
                expect(data).to.have.property("color", unknown.color);
                expect(data).to.have.property("pantone_value", unknown.pantone_value);
            });
        } catch (error) {
            cy.logger(`Falha ao buscar Unknown`, error);
            throw Error(error.message);
        }
    });

    it("LIST - SUCCESSFUL BASED ON PUT", () => {
        try {
            cy.logger("Tentando listar Unknown");

            cy.request({
                method: "GET",
                delay: 500,
                url: `${Cypress.env("baseUrl")}/unknown`,
                failOnStatusCode: true,
            }).then((response) => {
                cy.logger(`Retorno=${JSON.stringify(response.body.data)}`);

                const data = response.body.data;
                const model = data.filter(x => x.id === unknown.id)[0];

                expect(response).to.have.property("status", 200);
                expect(data).to.not.be.null;
                expect(model).to.not.be.null;
                expect(model).to.have.property("id", unknown.id);
                expect(model).to.have.property("name", unknown.name);
                expect(model).to.have.property("year", unknown.year);
                expect(model).to.have.property("color", unknown.color);
                expect(model).to.have.property("pantone_value", unknown.pantone_value);
            });
        } catch (error) {
            cy.logger(`Falha ao listar Unknown`, error);
            throw Error(error.message);
        }
    });

    it("DELETE - SUCCESSFUL", () => {
        try {
            cy.logger(`Tentando deletar Unknown ${unknown.id}`);

            cy.request({
                method: "DELETE",
                delay: 500,
                url: `${Cypress.env("baseUrl")}/unknown/${unknown.id}`,
                failOnStatusCode: true,
                headers: {
                    ...Cypress.env("options"),
                }
            }).then((response) => {
                cy.logger(`Retorno=${JSON.stringify(response.body.data)}`);

                expect(response).to.have.property("status", 200);
            });

        } catch (error) {
            cy.logger(`Falha ao deletar Unknown ${unknown.id}`, error);
            throw Error(error.message);
        }
    });
});
