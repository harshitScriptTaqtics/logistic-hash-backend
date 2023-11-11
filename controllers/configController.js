const { getEnvValues } = require("../utils/helper")

const whoAmIController = (req, res, next) => {
    res.status(200).json({
        'server-name': getEnvValues('SERVER_NAME'),
        'server-state': getEnvValues('SERVER_STATE'),
        'port': getEnvValues('PORT')
    })
}

module.exports = { whoAmIController }