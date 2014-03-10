cordova.define("org.gusmano.snippit", function(require, exports, module) {//alert(window.echo.echo);
//var success = function(r) { alert(JSON.stringify(r)); };
//var error = function(message) { alert("Oopsie! " + message); };
//window.echo.createEcho('hello', success, error);

var cordova = require('cordova'),
    exec = require('cordova/exec');

//alert('in3plugin2');

var Snippit = function () {
    this.echo = 'hi';

    this.createEcho = function (valToEcho, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback,
            'Snippit', 'createEcho', [{ "echoVal": valToEcho }]
        );
    };

    this.sendNotification = function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback,
            'Snippit', 'sendNotification', [{}]
        );
    };

    this.sayHi = function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback,
            'Snippit', 'sayHi', [{}]
        );
    };

    this.showSplash = function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback,
            'Snippit', 'showSplash', [{}]
        );
    }

    this.sendSMS = function (phoneNumber, message, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback,
            'Snippit', 'sendSMS', [{ "phoneNumber": phoneNumber, "message": message }]
        );
    };

    this.makeCall = function (phoneNumber, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback,
            'Snippit', 'makeCall', [{ "phoneNumber": phoneNumber }]
        );
    };

};

var snippit = new Snippit();

module.exports = snippit;
});
