var assert = require('assert');
var path = require('path');
var test = require('test');

var appRunner = require('ruff-app-runner');
var mock = require('ruff-mock');

var verify = mock.verify;

var appPath = path.join(__dirname, '..');

var controller = require('../src/controller.js');
var tennis = {
	isCalled: false,
	senderWin: function() {
		this.isCalled = true;
	},
	score: function () {
		return 'Score';
	}
};

module.exports = {
    // 'test should run application': function () {
    //     appRunner
    //         .run(appPath, function () {
    //             verify($('led-r')).turnOn();
    //         })
    //         .end(function () {
    //             verify($('led-r')).turnOff();
    //         });
    // }
    'test left button should let sender win one point': function () {
    	controller.tennis = tennis;
    	controller.senderWin();

    	assert.equal(tennis.isCalled, true);
    },
    'test left button should return current score': function () {
    	controller.tennis = tennis;

    	assert.equal(controller.senderWin(), 'Score');
    }
};

test.run(module.exports);
