const { ObjectId } = require("mongoose");
const User = require("../models/user");

const createSuperAdmin = async (payload) => {
    const { name, email, password, mobile, role } = payload.apiPayload;
    try {
        const superAdmin = new User({
            name, email, password, mobile, role
        })
        const result = await superAdmin.save();
        if (!result) {
            return undefined
        }
        return result;
    } catch (error) {
        console.log('Error >>>> ', error.message)
        return undefined
    }
}

const superAdminLogin = async (payload) => {
    const { email, password } = payload.apiPayload;
    const query = { email };
    try {
        const user = await User.findOne(query);
        if (!user) {
            console.log(`[superAdminLogin] Failed to find user with email ${email}`)
            return null
        }
        if (!(password === user.password)) {
            console.log(`[superAdminLogin] Password not matched for user with email ${email}`)
            return undefined
        }
        return user
    } catch (error) {
        console.log(`[superAdminLogin] Failed to login user with email ${email}`)
        return undefined
    }
}

module.exports = { superAdminLogin, createSuperAdmin }