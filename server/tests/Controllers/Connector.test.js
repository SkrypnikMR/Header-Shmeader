const makeDB = require('../../Controllers/Connector');


describe('makeDB', () => {
    it('makeDB to be defined', () => {
        expect(makeDB).toBeDefined();
    })
    it('makeDB have method query', () => {
        expect(makeDB.query).toBeDefined();
    })
    it('makeDB have method close', () => {
        expect(makeDB.close).toBeDefined();
    })
    it('should return some result from db and makeDB.close close connection', async () => {
        const result = await makeDB.query('SELECT * FROM testJest');
        expect(result).toEqual([{ firstName: "MaxTest", id: 1 }]);
        makeDB.close();
    })
})