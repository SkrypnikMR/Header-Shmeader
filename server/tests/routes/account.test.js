const express = require("express");
const account = require("../../routes/account");
const request = require("supertest");
const makeDB = require('../../Controllers/Connector');


describe("account", () => {
    let app = null;
    beforeEach(() => {
        app = express();
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use("/api/account", account);
    })
    afterEach(() => app = null)
    afterAll(() => makeDB.close());
    it("expect POST account/registartion with such user exsits", async () => {
        const { body, status } = await request(app).post("/api/account/registration").send({ email: 'SkripnikMRW@gmail.com', password: 'somePassword' });
        expect(body).toEqual({ "message": "such user exists" });
        expect(status).toBe(400);
    });
    it("expect POST account/registartion with done", async () => {
        const emailForTest = `EmailForJest@gmail.com`;
        makeDB.query(`DELETE FROM users WHERE (email = '${emailForTest}');`)
        const { body, status } = await request(app).post("/api/account/registration").send({
            email: emailForTest,
            password: 'somePassword',
            firstName: 'Max',
            lastName: 'Skrip'
        });
        expect(body).toEqual({ "message": "done" });
        expect(status).toBe(201);
    });
    it("expect POST account/registartion with something wrong", async () => {
        const { body, status } = await request(app).post("/api/account/registration");
        expect(body).toEqual({ "message": "something wrong" });
        expect(status).toBe(500);
    });
    it("expect POST account/login with Wrong User or Password wrong password", async () => {
        const { body, status } = await request(app).post("/api/account/login").send({ email: 'SkripnikMRW@gmail.com', password: 'somePassword' });
        expect(body).toEqual({ "message": "Wrong User or Password" });
        expect(status).toBe(400);
    });
    it("expect POST account/login with Wrong User or Password wrong login", async () => {
        const { body, status } = await request(app).post("/api/account/login").send({ email: 'SkripniksMRW@gmail.com', password: 'somePassword' });
        expect(body).toEqual({ "message": "Wrong User or Password" });
        expect(status).toBe(400);
    });
    it("expect POST account/login with token", async () => {
        const { body, status } = await request(app).post("/api/account/login").send({ email: 'SkripnikMRW@gmail.com', password: 'kekShrek' });
        expect(status).toBe(200);
        expect(body.token).toBeDefined();
        expect(body.message).not.toBeDefined();
    });
    it("expect POST account/login with 500 and Something wrong. Please try again.", async () => {
        const app = express();
        app.use("/api/account", account);
        const { body, status } = await request(app).post("/api/account/login").send({sad:'bad'});
        console.log(body);
        expect(status).toBe(500);
        expect(body).toEqual({ "message": "Something wrong. Please try again." });
    });
});