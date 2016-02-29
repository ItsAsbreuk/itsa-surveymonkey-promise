"use strict";

var extend = function(prototypes) {

    prototypes.createFlow = function(params) {
        return this._api.then(function(api) {
            return new Promise(function(resolve, reject) {
                api.execute("batch", "create_flow", [
                    "survey",
                    "collector",
                    "email_message"
                ], params, function (error, data) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(data);
                    }
                });
            });
        });
    };

    prototypes.sendFlow = function(params) {
        return this._api.then(function(api) {
            return new Promise(function(resolve, reject) {
                api.execute("batch", "send_flow", [
                    "survey_id",
                    "collector",
                    "email_message"
                ], params, function (error, data) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(data);
                    }
                });
            });
        });
    };

    prototypes.createRecipients = function(params) {
        return this._api.then(function(api) {
            return new Promise(function(resolve, reject) {
                api.execute("collectors", "create_recipients", [
                    "collector_id",
                    "send",
                    "email_message_id",
                    "recipients"
                ], params, function (error, data) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(data);
                    }
                });
            });
        });
    };

    prototypes.getTemplateList = function(params) {
        return this._api.then(function(api) {
            return new Promise(function(resolve, reject) {
                api.execute("templates", "get_template_list", [
                    "page",
                    "page_size",
                    "language_id",
                    "category_id",
                    "show_only_available_to_current_user",
                    "fields"
                ], params, function (error, data) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(data);
                    }
                });
            });
        });
    };

};

module.exports = {
    extend: extend
};