'use strict';

module.exports = class BaseModel {
    constructor(connection = null) {
        this.connection = connection;
    }

    get_connection() {
        return this.connection;
    }
};