var snippit = {
	
    createEcho: function (valToEcho, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback,
            'Snippit', 'createEcho', [{ "echoVal": valToEcho }]
        );
    },

    sendNotification: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback,
            'Snippit', 'sendNotification', [{}]
        );
    },

    sayHi: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback,
            'Snippit', 'sayHi', [{}]
        );
    },

    showSplash: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback,
            'Snippit', 'showSplash', [{}]
        );
    },

    sendSMS: function (phoneNumber, message, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback,
            'Snippit', 'sendSMS', [{ "phoneNumber": phoneNumber, "message": message }]
        );
    },

    makeCall: function (phoneNumber, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback,
            'Snippit', 'makeCall', [{ "phoneNumber": phoneNumber }]
        );
    }
	
}
module.exports = snippit;


