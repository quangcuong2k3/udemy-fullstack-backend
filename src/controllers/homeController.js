const connection = require('../config/database')
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDServices');

const getHomepage = async (req, res) => {
    let result = await getAllUsers();
    return res.render('home.ejs', { listUsers: result })

}
const getABC = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    console.log(">>email =", email, "name = ", name, "city =", city)

    // let{email,name,city} = req.body;

    let [results, fields] = await connection.query(
        ` INSERT INTO Users (email,name,city )VALUES (?, ?, ?)`, [email, name, city],
    );

    res.send('Create user success!')

}
const getCreatePage = (req, res) => {
    res.render("create.ejs")
}
const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render("edit.ejs", { userEdit: user });
}
const postUpdateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;

    await updateUserById(email, city, name, userId);
    // res.send('Update user success!')
    res.redirect('/');  //ham gọi về trang chủ bên  web.js

}
const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('delete.ejs', { userEdit: user })
}
const postHandleRemoveUser = async (req, res) => {
    const id = req.body.userId;
    await deleteUserById(id);
    res.redirect('/');
}
module.exports = {
    getHomepage, getABC, postCreateUser,
    getCreatePage, getUpdatePage,
    postUpdateUser, postDeleteUser, postHandleRemoveUser
}