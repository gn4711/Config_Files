// ==UserScript==
// @name         Twitch Video Reloader
// @version      0.1
// @description  Reload twitch on specific error
// @author       You
// @match        https://www.twitch.tv/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function checkStatus() {
        const results = document.querySelectorAll('div[data-a-target="player-overlay-content-gate"]').length;
        console.log(results);
        if (results > 0) {
            location.reload();
        }
    }

    window.onload = function () {
        setInterval(checkStatus, 1000);
    }
})();