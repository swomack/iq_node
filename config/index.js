/**
 * Created by USER on 10/14/2017.
 */

'use strict';

class Config {
    constructor(type = 'local') {
        if (type === 'local') {
            this.mode = 'local';
            this.port = 2000;
        } else if (type === 'staging') {
            this.mode = 'staging';
            this.port = 3000;
        } else {
            this.mode = 'production';
            this.port = 4000;
        }

        this.databse_name = 'iq3_database';
        this.host = 'localhost';
        this.user_name = 'root';
        this.password = '';
    }
}


module.exports = function(type) {
    return new Config(type);
};
