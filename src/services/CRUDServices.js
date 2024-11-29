const connection = require("../config/database");
const getAllUsers = async () => {
    let [result, fields] = await connection.query('SELECT*FROM Users');
    return result;
}
module.exports = {
    getAllUsers
};