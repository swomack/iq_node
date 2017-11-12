'use strict';

let expect = require('chai').expect;

let BaseControllerClass = require('../routes/base');

describe('Base controller', function() {
    it('should create a base controller object', function(next) {
        let base_controller = new BaseControllerClass('Base controller');

        expect(base_controller).to.be.not.undefined;
        expect(base_controller.run).to.be.not.undefined;
        expect(base_controller.name).to.equal('Base controller');
        next();
    });
});
