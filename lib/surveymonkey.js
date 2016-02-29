/**
 * lib/surveymonkey.js
 * Logic for interacting with surveymonkey.
 */

"use strict";

var Classes = require("itsa-classes"),
    SurveyMonkeyAPI = require("surveymonkey").SurveyMonkeyAPI,
    extendSM = require("./extend-surveymonkey"),
    API_METHODS = [
        "createCollector",
        "getRespondentList",
        "getResponses",
        "getSurveyDetails",
        "getSurveyList",
        "getCollectorList",
        "getResponseCounts",
        "getUserDetails"
    ],
    prototypes = {};

API_METHODS.forEach(function(method) {
    (function(m) {
        prototypes[m] = function(params) {
            return this._api.then(function(api) {
                return new Promise(function(resolve, reject) {
                    api[m](params, function (error, data) {
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
    }(method));
});

// Defining api-methods that are missing in the module surveymonkey:
extendSM.extend(prototypes);

var SurveyMonkeyAPIPromisesClass = Classes.createClass(function(apiKey, accessToken, options) {
    if (!options && (typeof accessToken !== "string")) {
        options = accessToken;
        accessToken = null;
    }
    options || (options={});
    options.version = "v2"; // ony v2 for now
    this._api = new Promise(function(resolve, reject) {
        var api;
        try {
            api = new SurveyMonkeyAPI(apiKey, accessToken, options);
            resolve(api);
        } catch (error) {
            reject(error);
        }
    });
}, prototypes);


module.exports = SurveyMonkeyAPIPromisesClass;
