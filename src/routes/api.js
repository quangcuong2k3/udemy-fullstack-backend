const express = require('express'); // trong file này dùng  để gọi postman
const routerAPI = express.Router();
const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI,
    deleteUserAPI, postUploadSingleFileAPI, postUploadMultipleFilesAPI
} = require('../controllers/apiController');

const { postCreateCustomer, postCreateArrayCustomer,
    getAllCustomers, putUpdateCustomers, deleteACustomer, deleteArrayCustomers
} = require('../controllers/customerController')
const { postCreateProject, getAllProject, updateProject, deleteProject
} = require('../controllers/projectController')

const { postCreateTask, getAllTask,
    updateTask, deleteTask
} = require('../controllers/taskController')

routerAPI.get('/users', getUsersAPI);//muon lay data dung get
routerAPI.post('/users', postCreateUserAPI);//muon tao moi data dung post
routerAPI.put('/users', putUpdateUserAPI); //muon update data dung put
routerAPI.delete('/users', deleteUserAPI); //muon xoa data dung delete
routerAPI.post('/file', postUploadSingleFileAPI);
routerAPI.post('/files', postUploadMultipleFilesAPI);

routerAPI.post('/customers', postCreateCustomer);
routerAPI.post('/customers-many', postCreateArrayCustomer);
routerAPI.get('/customers', getAllCustomers);
routerAPI.put('/customers', putUpdateCustomers);
routerAPI.delete('/customers', deleteACustomer);
routerAPI.delete('/customers-many', deleteArrayCustomers);


routerAPI.get('/projects', getAllProject);
routerAPI.post('/projects', postCreateProject);
routerAPI.put('/projects', updateProject);
routerAPI.delete('/projects', deleteProject);


routerAPI.get('/tasks', getAllTask);
routerAPI.post('/tasks', postCreateTask);
routerAPI.put('/tasks', updateTask);
routerAPI.delete('/tasks', deleteTask);


routerAPI.get('/info', (req, res) => {
    console.log("check query", req.query)
    return res.status(200).json({
        data: req.query,
    })
});
routerAPI.get('/info/:name/:address', (req, res) => {
    console.log("check params", req.params)
    return res.status(200).json({
        data: req.params,
    })
});
module.exports = routerAPI;