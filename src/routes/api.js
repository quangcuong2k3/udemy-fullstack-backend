const express = require('express'); // trong file này dùng  để gọi postman
const routerAPI = express.Router();
const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI,
    deleteUserAPI, postUploadSingleFileAPI, postUploadMultipleFilesAPI
} = require('../controllers/apiController');
const { postCreateCustomer } = require('../controllers/customerController')


routerAPI.get('/users', getUsersAPI);//muon lay data dung get
routerAPI.post('/users', postCreateUserAPI);//muon tao moi data dung post
routerAPI.put('/users', putUpdateUserAPI); //muon update data dung put
routerAPI.delete('/users', deleteUserAPI); //muon xoa data dung delete
routerAPI.post('/file', postUploadSingleFileAPI);
routerAPI.post('/files', postUploadMultipleFilesAPI);


routerAPI.post('/customers', postCreateCustomer);
module.exports = routerAPI;