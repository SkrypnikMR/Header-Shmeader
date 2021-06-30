class ChatManager {
    constructor(connect) { this.connect = connect }
    getAllRooms = async (req, res) => {
        try {
            const { id } = req.query;
            const userRooms = await this.connect.query(`SELECT rooms.id as room_id, rooms.name as room_name
            FROM
            rooms,
            users_rooms,
            users
            where rooms.id = users_rooms.room_id
            AND users.id = users_rooms.user_id
            AND users.id = ${id};`);
            res.status(200).json(userRooms);
        } catch (e) { res.status(500).json({ message: 'something_wrong' }); }
    }
    getAllMessages = async (req, res) => {
        try {
            const { id } = req.query;
            const userMessages = await this.connect.query(`SELECT
            messages.id as id ,
            messages.author as author ,
            messages.text as text,
            messages.room_name as room_name,
            messages.room_id as room_id,
            messages.time as time
            FROM
            messages,
            users_messages,
            users
            where messages.id = users_messages.message_id
            AND users.id = users_messages.user_id
            AND users.id = ${id};`);
            res.status(200).json(userMessages);
        } catch (e) { console.log(e); res.status(500).json({ message: 'something_wrong' }); }
    }
    setNewMessage = async (message) => {
        try {
            const { author, text, time, room_id, room_name } = message;
            const invalved = await this.connect.query(`SELECT users.id as id
            FROM
            rooms,
            users_rooms,
            users
            where rooms.id = ${room_id}
            AND users.id = users_rooms.user_id
            AND users_rooms.room_id = ${room_id}`
            );
            await this.connect.query(`INSERT INTO messages( author, text, time, room_name, room_id)
            VALUES('${author}', '${text}', '${time}', '${room_name}', ${room_id});`);
            const [{ id }] = await this.connect.query(`SELECT LAST_INSERT_ID() as id`);
            await invalved.forEach(async invalvedUser => {
                const query = `INSERT INTO users_messages(user_id, message_id) VALUES(${invalvedUser.id}, ${await id});`
                await this.connect.query(query);
            })
        } catch (e) { console.log(e) };
    }
    setNewRoom = async (newRoomInfo) => {
        try {
            const { id, room_name } = newRoomInfo;
            const checkRoom = await this.connect.query(`SELECT * FROM rooms where rooms.name = '${room_name}' `)
            if (checkRoom.length > 0) return { error: 'room_already_exists' };
            await this.connect.query(`INSERT INTO rooms (name) VALUES ('${room_name}')`)
            const newSettedRoom = await this.connect.query(`SELECT * FROM rooms where rooms.name = '${room_name}' `)
            const { id: room_id } = newSettedRoom[0];
            await this.connect.query(`INSERT INTO rooms (name) VALUES ('${room_name}')`)
            await this.connect.query(`INSERT INTO users_rooms (user_id, room_id) VALUES ('${id}', '${room_id}');`)
            return { room_id: newSettedRoom[0].id, room_name: newSettedRoom[0].name };
        }
        catch (e) {
            console.log('chatManager error', e);
            return { error: 'db_error' };
        }
    }
}

module.exports = ChatManager;