const superAdminAPI = require('../core/superAdminAPI');

const createSuperAdmin = async (req, res, next) => {
    const { payload } = req;
    try {
        const result = await superAdminAPI.createSuperAdmin(payload);
        if (!result) {
            res.status(500).json({ message: "Super admin creation failed." })
            return 0
        }
        res.status(201).json({ message: "Super admin created successfully" })
        return 1
    } catch (error) {
        next(error)
        return 0
    }
}

const superAdminLogin = async (req, res, next) => {
    const { payload } = req;
    const result = await superAdminAPI.superAdminLogin(payload);
    if (!result) {
        console.log('Failed to login the super admin');
        res.status(500).json({ message: 'Failed to login the super admin' })
        return 0
    }
    res.status(200).json({
        message: 'Login successfully',
    })
    return 1
}



module.exports = { superAdminLogin, createSuperAdmin }