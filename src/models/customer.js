const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
},
    {
        timestamps: true,//createAt, updateAt
        // statics: {
        //     findByCuong(name) { //dat ten j cx dc dán vao customservices
        //         return this.find({ name: new RegExp(name, 'i') });
        //     }
        // }
    }
);
// Override all methods
customerSchema.plugin(mongoose_delete, { overrideMethods: 'all' });

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
