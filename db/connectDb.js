const mongoose = require("mongoose");


let db;
let tenantMap = new Map();
const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connectDb = async () => {
    try {
        db = await mongoose.connect(`${process.env.MONGO_URI}`, mongoOptions);
        console.log(`Mongoose connection => successfully`)
        return 1
    } catch (error) {
        console.log(`Failed to establish connection to the db: ${error.message}.`)
        return 0
    }
}

const getTenantDb = (tenantName) => {
    if (tenantMap.has(tenantName)) {
        db = tenantMap.get(tenantId);
        return db;
    } else {
        try {
            const db2 = db.useDb(tenantId, { useCache: true });
            tenantMap.set(tenantId, db2);
            return db2
        } catch (error) {
            console.log(`Failed to get the ${tenantName} db connection.`)
        }
    }
}


module.exports = { connectDb, getTenantDb }
