const { uploadSingleFile } = require('../services/fileServices');
const { createCustomerService, createArrayCustomerServices } = require('../services/customerServices');

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
        return res.status(200).json({
            EC: 0,
            data: customer
        })
    },
    postCreateArrayCustomer: async (req, res) => {

        let customers = await createArrayCustomerServices(req.body.customers);
        if (customers) {
            return res.status(200).json({
                EC: 0,
                data: customers
            })
        } else {
            return res.status(200).json({
                EC: -1,
                data: customers
            })
        }
    }
}
