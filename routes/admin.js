'use strict';

let BaseControllerClass = require('./base');
let BaseViewClass = require('../views/base');

module.exports = class AdminPageController extends BaseControllerClass {
    constructor(name) {
        super(name);
    }

    run(req, res, next) {
        let view = new BaseViewClass(res, 'admin');
        view.render({   'title': 'Admin',
                        'content': 'Welcome to the admin panel.'});
    }
};