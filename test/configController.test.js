const chai = require('chai');
const { whoAmIController } = require('../controllers/configController');
require('dotenv').config();

describe('[configControllers.js]', () => {
    describe('[whoAmIController]', () => {
        it('should return the server-name, server-state, port as response', () => {
            let req = {};
            let res = {
                json(data) {
                    chai.expect(data).to.haveOwnProperty('server-name');
                    chai.expect(data).to.haveOwnProperty('server-state');
                    chai.expect(data).to.haveOwnProperty('port');
                    return this;
                },
                status(code) {
                    chai.expect(code).to.be.equal(200);
                    return this;
                }
            };
            let next = () => { }
            whoAmIController(req, res, next);
        })
    })
})

