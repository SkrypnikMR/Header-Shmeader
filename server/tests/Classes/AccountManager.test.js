const AccountManager = require('../../Classes/AccountManager');
const bcrypt = require('bcryptjs');
require('dotenv').config();

jest.mock('jsonwebToken', () => ({ sign: jest.fn().mockReturnValue({ token: 'someToken' }) }))

describe('AccountManager test', () => {
    describe('AccountManager', () => {
        it('AccountManager to be defined', () => {
            expect(AccountManager).toBeDefined();
        })
        it('AccountManager to be class', () => {
            const connect = { testfield: 1 };
            const accounManagerTest = new AccountManager(connect);
            expect(accounManagerTest).toBeInstanceOf(AccountManager);
        })
    })
    describe('AccountManager registration', () => {
        it('AccountManager registration defined', () => {
            expect(new AccountManager().registration).toBeDefined();
        })
        it('AccountManager registartion function', () => {
            expect(typeof new AccountManager().registration).toBe('function');
        })
        it('registration call res status 400 and json message: "such user exsists" ', async () => {
            const connect = { query: jest.fn().mockResolvedValue([{ someUserInDb: 'Max@yandex.ru' }]) }
            const req = {
                body: {
                    email: 'Max@yandex.ru',
                    password: 'somePassword',
                    firstName: 'Maxim',
                    lastName: 'Skripnik'
                }
            };
            const res = {
                send: function () { },
                json: jest.fn(),
                status: function (responseStatus) {
                    expect(responseStatus).toBe(400);
                    return this;
                }
            };
            const testAccManager = new AccountManager(connect);
            await testAccManager.registration(req, res);
            expect(connect.query).toHaveBeenCalledWith(`SELECT * FROM users WHERE email = '${req.body.email}'`)
            expect(res.json).toHaveBeenCalledWith({ message: 'such_user_exists' });
        })
        it('registration call res status 201 and json message: "done" ', async () => {
            const connect = { query: jest.fn().mockResolvedValue([]) }
            const req = {
                body: {
                    email: 'Max@yandex.ru',
                    password: 'string324',
                    firstName: 'Max',
                    lastName: 'Skrip'
                }
            };
            const res = {
                send: function () { },
                json: jest.fn(),
                status: function (responseStatus) {
                    expect(responseStatus).toBe(201);
                    return this;
                }
            };
            const testAccManager = new AccountManager(connect);
            await testAccManager.registration(req, res);
            expect(connect.query).toHaveBeenCalledWith(`SELECT * FROM users WHERE email = '${req.body.email}'`)
            expect(res.json).toHaveBeenCalledWith({ message: 'done' });
        })
        it('registration call res status 500 and json message: "!done" ', async () => {
            const req = {};
            const res = {
                send: function () { },
                json: jest.fn(),
                status: function (responseStatus) {
                    expect(responseStatus).toBe(500);
                    return this;
                }
            };
            const testAccManager = new AccountManager();
            await testAccManager.registration(req, res);
            expect(res.json).toHaveBeenCalledWith({ message: 'something_wrong' });
        })
    })
    describe('AccountManager login', () => {
        it('AccountManager login defined', () => {
            expect(new AccountManager().login).toBeDefined();
        })
        it('AccountManager login function', () => {
            expect(typeof new AccountManager().login).toBe('function');
        })
        it(' login call res.status with 400 and message "Wrong User or Password" email wrong ', async () => {
            const connect = { query: jest.fn().mockResolvedValue([]) }
            const req = {
                body: {
                    email: 'SomeWrongEmail@gmail.com',
                    password: 'somePassword',
                }
            };
            const res = {
                send: function () { },
                json: jest.fn(),
                status: function (responseStatus) {
                    expect(responseStatus).toBe(400);
                    return this;
                }
            };
            const testAccManager = new AccountManager(connect);
            await testAccManager.login(req, res);
            expect(res.json).toHaveBeenCalledWith({ message: 'wrong_user_or_password' });
        })
        it(' login call res.status with 400 and message "Wrong User or Password" password wrong ', async () => {
            const password = 'somePassword';
            const userEmail = 'SomeNotWrongEmail@gmail.com';
            const connect = { query: jest.fn().mockResolvedValue([{ email: userEmail, password: await bcrypt.hash(password, 12), id: 1 }]) }
            const req = {
                body: {
                    email: 'SomeNotWrongEmail@gmail.com',
                    password: 'somePassword1',
                }
            };
            const res = {
                send: function () { },
                json: jest.fn(),
                status: function (responseStatus) {
                    expect(responseStatus).toBe(400);
                    return this;
                }
            };
            const testAccManager = new AccountManager(connect);
            await testAccManager.login(req, res);
            expect(res.json).toHaveBeenCalledWith({ message: 'wrong_user_or_password' });
        })
        it(' login call res.status with 200 and res.json called with token ', async () => {
            const password = 'somePassword';
            const userEmail = 'SomeNotWrongEmail@gmail.com';
            const connect = {
                query: jest.fn().mockResolvedValue([{
                    email: userEmail,
                    password: await bcrypt.hash(password, 12),
                    id: 1,
                    firstName: 'SomeFirstIdName',
                    lastName: 'SomeLastIdName'
                }])
            }
            const req = {
                body: {
                    email: 'SomeNotWrongEmail@gmail.com',
                    password: 'somePassword',
                }
            };
            const res = {
                send: function () { },
                json: jest.fn(),
                status: function (responseStatus) {
                    expect(responseStatus).toBe(200);
                    return this;
                }
            };
            const testAccManager = new AccountManager(connect);
            await testAccManager.login(req, res);
            expect(res.json).toHaveBeenCalledWith({
                token: { token: 'someToken' },
                userInfo: {
                    email: 'SomeNotWrongEmail@gmail.com',
                    firstName: '',
                    id: 1,
                    firstName: 'SomeFirstIdName',
                    lastName: 'SomeLastIdName'
                },
                message: 'done'
            });
        })
        it(' login call res.status with 500 and res.json called with message: "Something wrong. Please try again." ', async () => {
            const connect = { query: jest.fn().mockRejectedValue([]) }
            const req = {
                body: {
                    email: 'SomeNotWrongEmail@gmail.com',
                    password: 'somePassword'
                }
            };
            const res = {
                send: function () { },
                json: jest.fn(),
                status: function (responseStatus) {
                    expect(responseStatus).toBe(500);
                    return this;
                }
            };
            const testAccManager = new AccountManager(connect);
            await testAccManager.login(req, res);
            expect(res.json).toHaveBeenCalledWith({ message: 'something_wrong' });
        })
    })
})
