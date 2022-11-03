var mongoose = require('mongoose');
class database {
    constructor() {
        this._connect()
    }
    DB_URL = process.env.DB_URL
    DB_NAME = process.env.DB_NAME
    async _connect() {
        try {
            await mongoose.connect(`${this.DB_URL}/${this.DB_NAME}`)
            console.log('database connected successfully.')
        } catch (error) {
            console.error('db connection failed more info: \n', error);
            process.exit(0)
        }
    }
}

module.exports = new database()