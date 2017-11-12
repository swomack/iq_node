'use strict';

module.exports = class BaseView {
    constructor(response_object, template_name) {
        this.response = response_object;
        this.template_name = template_name;
    }

    render(data) {
        this.response.render(this.template_name, data);
    }
};