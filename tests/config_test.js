
'use strict';

let expect = require('chai').expect;


describe('Configuration setup', function() {

    describe('Local configuration', function() {

        it('should load local configuration', function(next) {

            let local_config = require('../config/')('local');

            expect(local_config).to.be.not.undefined;
            expect(local_config.mode).to.equal('local');
            expect(local_config.port).to.equal(2000);

            next();
        });

        it('should load local configuration', function(next) {

            let local_config = require('../config/')();

            expect(local_config).to.be.not.undefined;
            expect(local_config.mode).to.equal('local');
            expect(local_config.port).to.equal(2000);

            next();
        });
    });

    it('should load staging configuration', function(next) {

        let staging_config = require('../config/')('staging');

        expect(staging_config).to.be.not.undefined;
        expect(staging_config.mode).to.equal('staging');
        expect(staging_config.port).to.equal(3000);

        next();
    });


    it('should load production configuration', function(next) {

        let production_config = require('../config/')('production');

        expect(production_config).to.be.not.undefined;
        expect(production_config.mode).to.equal('production');
        expect(production_config.port).to.equal(4000);

        next();
    });

});

