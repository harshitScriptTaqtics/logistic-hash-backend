const errorBoundaryController = (error, req, res, next) => {
    if (error.code && error.message) {
        res.status(error.code).json({
            message: error.message,
        })
    }
    res.status(500).json({
        message: 'Something went wrong. Please try again'
    })
}
module.exports = { errorBoundaryController }