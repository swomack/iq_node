
'use strict';

let expect = require('chai').expect;

let BaseModel = require('../models/base');

describe('Base model', function() {
    it('Should create a new base model class', function(next) {
        let mock_connection = {};

        let base_class = new BaseModel(mock_connection);

        expect(base_class).to.be.not.undefined;
        expect(base_class).to.have.property('connection');
        expect(base_class.connection).to.equal(mock_connection);

        next();
    });
});