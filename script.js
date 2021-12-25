// ==UserScript==
// @name         ilovemusic.de disable ads
// @version      1.0.0
// @description  Disables ads on ilovemusic.de
// @author       TalkLounge (https://github.com/TalkLounge)
// @namespace    https://github.com/TalkLounge/ilovemusic.de-disable-ads
// @license      MIT
// @match        https://www.ilovemusic.de*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    setInterval(function () {
        if (ilr3 && ilr3.radio && ilr3.radio.preroll) {
            ilr3.radio.preroll.prerollShouldPlay = 0;
        }
    }, 1000);
})();
