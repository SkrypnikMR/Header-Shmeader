const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.SECRET_KEY;
const { registrationValidation, loginValidation } = require('../helpers/validation');
class AccountManager {
    constructor(connect) { this.connect = connect }
    registration = async (req, res) => {
        try {
            const { message, isValid } = registrationValidation(req.body);
            if (!isValid) return res.status(400).json({ message: message })
            const { email, password, firstName, lastName } = req.body;
            const candidate = await this.connect.query(`SELECT * FROM users WHERE email = '${email}'`);
            if (candidate.length > 0) return res.status(400).json({ message: 'such_user_exists' });
            const hashedPassword = await bcrypt.hash(password, 12);
            await this.connect.query(`INSERT INTO users (password, email, firstName, lastName)
            VALUES('${hashedPassword}', '${email}', '${firstName}', '${lastName}');`);
            await this.connect.query(`INSERT INTO users_rooms (user_id, room_id) VALUES(last_insert_id(), 1);`);
            res.status(201).json({ message: 'done' });
        } catch (e) { res.status(500).json({ message: 'something_wrong' }); }
    }
    login = async (req, res) => {
        try {
            const { message, isValid } = loginValidation(req.body);
            if (!isValid) return res.status(400).json({ message: message })
            const { email, password } = req.body;
            const users = await this.connect.query(`SELECT * FROM users WHERE email = '${email}' `);
            if (users.length < 1) return res.status(400).json({ message: 'wrong_user_or_password' });
            const user = users[0];
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(400).json({ message: 'wrong_user_or_password' });
            const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '8h' });
            const userInfo = {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                age: user.age,
                hobby: user.hobby,
                company: user.company,
                city: user.city,
            }
            res.status(200).json({ token, userInfo, message: 'done' });
        } catch (e) { res.status(500).json({ message: 'something_wrong' }); }
    }
    update = async (req, res) => {
        try {
            if (!req.body) return res.status(400).json({ message: 'bad_request' })
            const { id, firstName, lastName, age, city, company, hobby } = req.body;
            const check = await this.connect.query(`SELECT * FROM users WHERE id = ${id} `)
            if (check.length < 1) return res.status(400).json({ message: 'user_not_found' })
            await this.connect.query(` UPDATE users SET firstName = '${firstName}',
            lastName = '${lastName}', age = ${age}, city = '${city || ''}', company = '${company || ''}', hobby = '${hobby || ''}' 
            WHERE id = ${id} `)
            const newUserInfo = await this.connect.query(`SELECT users.id as id, users.firstName as firstName,
            users.lastName as lastName, users.age as age, users.city as city, users.company as company, users.hobby as hobby
            FROM users WHERE id = ${id} `)
            const answer = newUserInfo[0]
            res.status(200).json( answer )
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'something_wrong' });
        }
    }
}

module.exports = AccountManager;