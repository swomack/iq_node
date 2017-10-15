/**
 * Created by USER on 10/13/2017.
 */

"use strict";

describe('Configuration setup', function(){

    it('Should load local configuration', function(next) {

        let config = require('../config/index')();

        expect(config.local).toBeDefined();
        expect(config.local.port).toBe(2000);
        expect(config.local.mode).toBe('local');

        next();
    });

    it('Should load staging configuration', function(next) {

        let config = require('../config/index')('staging');

        expect(config.staging).toBeDefined();
        expect(config.staging.port).toBe(3000);
        expect(config.staging.mode).toBe('staging');

        next();
    });

    it('Should load production configuration', function(next) {

        let config = require('../config/index')('production');

        expect(config.production).toBeDefined();
        expect(config.production.port).toBe(3000);
        expect(config.production.mode).toBe('production');

        next();
    });

});
