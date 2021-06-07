const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.SECRET_KEY;
class AccountManager {
    constructor(connect) {
        this.connect = connect;
    }
    registration = async (req, res) => {
        try {
            const { email, password, firstName, lastName } = req.body;
            const candidate = await this.connect.query(`SELECT * FROM users WHERE email = '${email}'`);
            console.log(candidate);
            if (candidate.length > 0) return res.status(400).json({ message: 'such user exists' });
            const hashedPassword = await bcrypt.hash(password, 12);
            await this.connect.query(`INSERT INTO users (firstName, lastName, email, password) VALUES ('${firstName}', '${lastName}', '${email}', '${hashedPassword}')`);
            res.status(201).json({ message: 'done' });

        } catch (e) { console.log(e); res.status(500).json({ message: 'something wrong' }); }
    }
    login = async (req, res) => {
        try {
            const { email, password } = req.body;
            const users = await this.connect.query(`SELECT * FROM users WHERE email = '${email}' `);
            if (users.length < 1) return res.status(400).json({ message: 'Wrong User or Password' });
            const user = users[0];
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(400).json({ message: 'Wrong User or Password' });
            const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '8h' });
            res.status(200).json({ token });
        } catch (e) { console.log(e); res.status(500).json({ message: 'Something wrong. Please try again.' }); }
    }
}

module.exports = AccountManager;