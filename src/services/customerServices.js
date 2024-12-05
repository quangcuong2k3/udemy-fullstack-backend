const Customer = require('../models/customer');


const createCustomerService = async (customerData) => {
    try {
        let result = await Customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.image
        })
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}
const createArrayCustomerServices = async (arr) => {
    try {
        let result = await Customer.insertMany(arr);
        return result;
    } catch (error) {
        console.log("verror", error);
        return null;

    }
}
const getAllCustomerServices = async () => {
    try {
        let result = await Customer.find({});
        return result;
    } catch (error) {
        console.log("error", error);
        return null;
    }
}
const putUpdateCustomerServices = async (id, name, email, address) => {
    try {
        let result = await Customer.updateOne({ _id: id }, { email: email, name: name, address: address });
        return result;
    } catch (error) {
        console.log("error", error);
        return null;
    }
}
const deleteACustomerServices = async (id) => {
    try {
        let result = await Customer.deleteById(id);
        return result;
    } catch (error) {
        console.log("error", error);
        return null;
    }
}
module.exports = {
    createCustomerService, createArrayCustomerServices,
    getAllCustomerServices, putUpdateCustomerServices, deleteACustomerServices
}