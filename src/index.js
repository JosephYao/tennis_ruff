'use strict';

var controller = require('controller.js');

$.ready(function () {
    $('lcd').print('Love All');

    $('left_button').on('release', function() {
    	$('lcd').clear();
    	$('lcd').print(controller.senderWin());
    });
});
