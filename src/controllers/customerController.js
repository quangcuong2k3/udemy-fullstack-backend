const { uploadSingleFile } = require('../services/fileServices');
const { createCustomerService, createArrayCustomerServices,
    getAllCustomerServices, putUpdateCustomerServices, deleteACustomerServices
} = require('../services/customerServices');

module.exports = {
    postCreateCustomer: async (req, res) => {

        let { name, address, phone, email, description } = req.body;
        let imageUrl = "";

        //image string
        if (!req.files || Object.keys(req.files).length === 0) {
            //do not thing
        } else {
            let result = await uploadSingleFile(req.files.image);
            imageUrl = result.path;
        }
        let customerData = {
            name,
            address,
            phone,
            email,
            description,
            image: imageUrl
        }
        let customer = await createCustomerService(customerData);
        return res.status(200).json(
            {
                EC: 0,
                data: customer
            })
    },
    postCreateArrayCustomer: async (req, res) => {

        let customers = await createArrayCustomerServices(req.body.customers);
        if (customers) {
            return res.status(200).json(
                {
                    EC: 0,
                    data: customers
                })
        } else {
            return res.status(200).json(
                {
                    EC: -1,
                    data: customers
                })
        }
    },
    getAllCustomers: async (req, res) => {
        let result = await getAllCustomerServices();
        return res.status(200).json(
            {
                EC: 0,
                data: result
            })
    },
    putUpdateCustomers: async (req, res) => {
        let { id, name, email, address } = req.body;
        let result = await putUpdateCustomerServices(id, name, email, address);
        return res.status(200).json(
            {
                EC: 0,
                data: result
            })
    },
    deleteACustomer: async (req, res) => {
        let id = req.body.id;
        console.log("id", id)
        let result = await deleteACustomerServices(id);
        return res.status(200).json(
            {
                EC: 0,
                data: result
            })
    },
}
