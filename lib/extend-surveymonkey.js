/**
 * lib/surveymonkey-promise.js
 * Logic for interacting with surveymonkey.
 */

"use strict";

var extend = function(SurveyMonkeyAPI) {

    SurveyMonkeyAPI.prototype.createFlow = function(params, callback) {
        if (typeof params === "function") {
            callback = params;
            params = {};
        }
        this.execute("batch", "create_flow", [
            "survey.template_id",
            "survey.from_survey_id",
            "survey.survey_title",
            "survey.survey_nickname",
            "survey.language_id",
            "collector.type",
            "collector.name",
            "collector.thank_you_message",
            "collector.redirect_url",
            "collector.recipients[_].email",
            "collector.recipients[_].first_name",
            "collector.recipients[_].last_name",
            "collector.recipients[_].custom_id",
            "collector.send",
            "email_message.reply_email",
            "email_message.subject",
            "email_message.body_text",
            "email_message.disable_footer"
        ], params, callback);
    };

    SurveyMonkeyAPI.prototype.sendFlow = function(params, callback) {
        if (typeof params === "function") {
            callback = params;
            params = {};
        }
        this.execute("batch", "send_flow", [
            "survey_id",
            "collector.type",
            "collector.name",
            "collector.thank_you_message",
            "collector.redirect_url",
            "collector.recipients[_].email",
            "collector.recipients[_].first_name",
            "collector.recipients[_].last_name",
            "collector.recipients[_].custom_id",
            "collector.send",
            "email_message.reply_email",
            "email_message.subject",
            "email_message.body_text",
            "email_message.disable_footer"
        ], params, callback);
    };

    SurveyMonkeyAPI.prototype.createRecipients = function(params, callback) {
        if (typeof params === "function") {
            callback = params;
            params = {};
        }
        this.execute("collectors", "create_recipients", [
            "collector_id",
            "send",
            "email_message_id",
            "recipients[_].email",
            "recipients[_].first_name",
            "recipients[_].last_name",
            "recipients[_].custom_id"
        ], params, callback);
    };

    SurveyMonkeyAPI.prototype.getTemplateList = function(params, callback) {
        if (typeof params === "function") {
            callback = params;
            params = {};
        }
        this.execute("templates", "get_template_list", [
            "page",
            "page_size",
            "language_id",
            "category_id",
            "show_only_available_to_current_user",
            "fields"
        ], params, callback);
    };

};

module.exports = {
    extend: extend
};