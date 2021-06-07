const util = require('util');
const mysql = require('mysql');
const makeDB = (databaseName) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: 3306,
        password: 'root',
        database: databaseName,
        insecureAuth: true,
        options: { trustedConnection: true }
    });
    connection.connect(function (err) {
        if (err) throw err;
        console.log('mySQL connected');
    });
    return {
        query(sql, args) {
            return util.promisify(connection.query)
                .call(connection, sql, args);
        },
        close() {
            return util.promisify(connection.end).call(connection);
        }
    };
}

module.exports = makeDB('header&shmeader_db');