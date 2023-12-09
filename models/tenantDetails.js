const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tenantDetailsSchema = new Schema({
    companyName: {
        type: String,
        required: true,
        unique: true
    },
    companyId: {
        type: String,
        required: true,
        unique: true
    },
    adminEmail: {
        type: String,
        required: true,
        unique: true,
    },
    adminPassword: {
        type: String,
        required: true,
    },
    companyAddress: {
        type: String,
        required: true
    },
    subdomain: {
        type: String,
        required: true,
    },
    registrationDate: {
        type: Date,
        required: true,
    },
    updatedAt: {
        type: Date,
        required: true,
    }
}, {
    timestamps: true,
})
const TenantDetails = mongoose.model('TenantDetails', tenantDetailsSchema)

module.exports = TenantDetails