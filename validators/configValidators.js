const whoAmIValidator = (req, res, next) => {
    const payload = {
        ...req.payload
    }
    req.payload = payload;
    next();
}

module.exports = { whoAmIValidator }