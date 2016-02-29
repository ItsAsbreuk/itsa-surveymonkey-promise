[![Build Status](https://travis-ci.org/ItsAsbreuk/itsa-surveymonkey-promise.svg?branch=master)](https://travis-ci.org/ItsAsbreuk/itsa-surveymonkey-promise)


A node.js promise-library for the SurveyMonkey API.
Wrapper arround Datahero's <b><a href="https://github.com/Datahero/node-surveymonkey">surveymonkey</a></b>

# itsa-surveymonkey-promise

This module exposes the following features of the SurveyMonkey API to your node.js application:

 * SurveyMonkey API (Versions v2) as `Promises`

Further information on the SurveyMonkey API and its features is available at [https://developer.surveymonkey.com](https://developer.surveymonkey.com)

## Installation

Installing using npm (node package manager):

```js
npm install itsa-surveymonkey-promise
```

## Usage

Information on how to use `itsa-surveymonkey-promise` can be found below. All API (version 2) methids are available as a method on the generated API-instance.

More information on the available `API-methods` can be found at [https://developer.surveymonkey.com](https://developer.surveymonkey.com). You can also find further information on how to obtain an API key, and/or OAuth2 in your SurveyMonkey account and much more on the SurveyMonkey API pages.

### ItsaSurveyMonkeyPromise API

`ItsaSurveyMonkeyPromise` is a `Class` that needs to be instantiated. It takes three arguments:

1. your API key, which you can find in your SurveyMonkey Account.
2. your oAuth token if you are using oAuth for a particular user.  Leave null if you are just accessing with your API key.
3. `options`-object which can contain the following options:

 * `version` The API version to use. Defaults to v2.
 * `secure` Whether or not to use secure connections over HTTPS (true/false). Defaults to false.
 * `userAgent` Custom User-Agent description to use in the request header.


Example:

```js
var SurveyMonkeyApi = require("itsa-surveymonkey-promise");

var apiKey = 'Your SurveyMonkey API Key';
var accessToken = 'Your SurveyMonkey App Access Token';

surveyMonkey = new SurveyMonkeyApi(apiKey, accessToken, { secure : true });

surveyMonkey.getSurveyList({ title: "Some Title", page_size: 25 }).then(
    function(data) {
        console.log(data);
    },
    function(err) {
        console.log(err);
    }
);
```

## License

`itsa-surveymonkey-promise` is licensed under the BSD-3-Clause License. (See LICENSE)
