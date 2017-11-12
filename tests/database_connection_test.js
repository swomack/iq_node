'use strict';

let expect = require('chai').expect;
let config = require('../config')('local');

describe('Database connection', function() {
    it('Should be able to connect to the database', function(next) {

        let mysql = require('mysql');

        let connection = mysql.createConnection({
            host     : config.host,
            user     : config.user_name,
            password : config.password,
            database : config.databse_name
        });

        connection.connect(function(err) {
            expect(err).to.be.equal(undefined || null);
            connection.end();
            next();
        });
    });
});