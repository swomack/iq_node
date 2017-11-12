'use strict';

let expect = require('chai').expect;
let BaseViewClass = require('../views/base');

describe('Base View', function() {
    it ('should create new base view object', function(next) {

        let response_mockup = {
            render: function (template, data) {
                expect(template).to.equal('template-name');
                expect(data.data).to.equal('my-data');
                next();
            }
        };

        let base_view = new BaseViewClass(response_mockup, 'template-name');

        expect(base_view).to.be.not.undefined;
        expect(base_view.render).to.be.not.undefined;

        base_view.render({'data': 'my-data'});
    });
});