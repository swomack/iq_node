/**
 * Created by USER on 10/14/2017.
 */

"use strict";

class config
{
    constructor(type) {
        if (type == undefined || type === 'local') {
            this.mode = 'local';
            this.port = 2000;
        } else if (type === 'staging') {
            this.mode = 'staging';
            this.port = 3000;
        } else {
            this.mode = 'production';
            this.port = 4000;
        }

    }
}


module.exports = function(type) {
    return new config(type);
};
