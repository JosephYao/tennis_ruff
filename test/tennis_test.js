var assert = require('assert');
var path = require('path');
var test = require('test');

var appRunner = require('ruff-app-runner');
var mock = require('ruff-mock');

var verify = mock.verify;

var appPath = path.join(__dirname, '..');

var tennis = require('../src/tennis.js')

module.exports = {
    'test love all': function () {
    	assert.equal(tennis.score(), 'Love All');
    },
    'test fifteen love': function () {
        tennis.senderWin();

        assert.equal(tennis.score(), 'Fifteen Love');
    }
};

test.run(module.exports);
