'use strict';

$.ready(function () {
    $('lcd').print('Love All');

    $('left_button').on('release', function() {
    	$('lcd').clear();
    	$('lcd').print('Fifteen Love');
    });
});
