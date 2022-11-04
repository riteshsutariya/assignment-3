const mongoose = require('mongoose')

class database {
    DB_URL = process.env.DB_URL;
    DB_NAME = process.env.DB_NAME;
    constructor() {
        this._connect()
    }
    async _connect() {
        try {
            await mongoose.connect(`${this.DB_URL}/${this.DB_NAME}`)
            console.log('database connection successful.')
        } catch (error) {
            console.error('connection error: ', error);
            process.exit(0)
        }
    }
}

module.exports = new database()