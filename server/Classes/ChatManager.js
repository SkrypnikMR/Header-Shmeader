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
        } catch (e) { console.log(e); res.status(500).json({ message: 'something_wrong' }); }
    }
}

module.exports = ChatManager;