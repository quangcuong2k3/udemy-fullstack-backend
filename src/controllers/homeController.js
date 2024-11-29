const connection = require('../config/database')
const { getAllUsers } = require('../services/CRUDServices');

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
    console.log("check result ", results)
    res.send('create user success')

}
const getCreatePage = (req, res) => {
    res.render("create.ejs")
}
const getUpdatePage = (req, res) => {
    const userId = req.params.id;
    res.render("edit.ejs")
}
module.exports = {
    getHomepage, getABC, postCreateUser, getCreatePage, getUpdatePage
}