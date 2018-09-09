/*global console, alert, prompet*/

/* Make The Title Link */

function refresh() {
    'use strict';
    location.reload();
}

/* Our Testemonials */

var myButtonR = document.getElementById('right'),
    myButtonL = document.getElementById('left'),
    myClient1 = document.getElementById('client1'),
    myClient2 = document.getElementById('client2'),
    myClient3 = document.getElementById('client3');

myButtonR.onclick = function () {
    'use strict';
    if (myClient1.className === 'testem') {
        myClient1.className = 'hidden';
        myClient2.className = 'testem';
        myButtonL.style.display = 'block';
    } else if (myClient2.className === 'testem') {
        myClient2.className = 'hidden';
        myClient3.className = 'testem';
        myButtonR.style.display = 'none';
    }
};

myButtonL.onclick = function () {
    'use strict';
    if (myClient3.className === 'testem') {
        myClient3.className = 'hidden';
        myClient2.className = 'testem';
        myButtonR.style.display = 'block';
    } else if (myClient2.className === 'testem') {
        myClient2.className = 'hidden';
        myClient1.className = 'testem';
        myButtonL.style.display = 'none';
    }
};

myButtonL.style.display = 'none';

/* Loading Animation */
var myanime = document.getElementById('animate'),
    myinfo = document.getElementById('info'),
    myheader = document.getElementById('header'),
    myfeature = document.getElementById('feature'),
    mywork = document.getElementById('work'),
    mytestem = document.getElementById('testem'),
    mycontact = document.getElementById('contact'),
    mysubs = document.getElementById('subs');

myinfo.style.display = 'none';
myheader.style.display = 'none';
myfeature.style.display = 'none';
mywork.style.display = 'none';
mytestem.style.display = 'none';
mycontact.style.display = 'none';
mysubs.style.display = 'none';

setInterval(function () {
    'use strict';
    myanime.style.display = 'none';
    clearInterval();
}, 5000);

setInterval(function () {
    'use strict';
    myinfo.style.display = 'block';
    myheader.style.display = 'block';
    clearInterval();
}, 5050);

setInterval(function () {
    'use strict';
    myfeature.style.display = 'block';
    clearInterval();
}, 5050);

setInterval(function () {
    'use strict';
    mywork.style.display = 'block';
    clearInterval();
}, 5050);

setInterval(function () {
    'use strict';
    mytestem.style.display = 'block';
    clearInterval();
}, 5050);

setInterval(function () {
    'use strict';
    mycontact.style.display = 'block';
    clearInterval();
}, 5050);

setInterval(function () {
    'use strict';
    mysubs.style.display = 'block';
    clearInterval();
}, 5050);

/* Add Animation For Elements */

var myFix = document.getElementById('fixed'),
    myIntroh = document.getElementById('intro-h'),
    myIntrop = document.getElementById('intro-p'),
    myIntrob = document.getElementById('intro-b');

if (window.pageYOffset === 0) {
    myIntroh.style.animation = 'moveright 1s .5s 1 ease-in-out forwards';
    myIntrop.style.animation = 'moveleft 1s .5s 1 ease-in-out forwards';
    myIntrob.style.animation = 'movetop 1s .5s 1 ease-in-out forwards';
}

window.onscroll = function () {
    'use strict';
    if (window.pageYOffset >= 200) {
        myFix.className = 'fixed';
        myFix.style.animation = 'movedown 1s 1 ease-in-out forwards';
    } else {
        myFix.className = 'hidden';
    }
};

/* Paragraph Typing */

var myType = document.getElementById('type'),
    myText = "Contact us to know what do you think",
    i = 0,
    calc,
    typeWriter = setInterval(calc, 500);

function calc() {
    'use strict';
    myType.textContent += myText[i];
    i += 1;
    if (i > myText.length - 1) {
        clearInterval(typeWriter);
    }
}

/* Calculate Textarea Character */

var myMessage = document.getElementById('message'),
    myCharacters = document.getElementById('my-characters');

myMessage.onkeyup = function () {
    'use strict';
    myCharacters.textContent = 150 - myMessage.value.length;
    if (myCharacters.textContent < 0) {
        myCharacters.style.color = '#F00';
    } else {
        myCharacters.style.color = '#1a2a3a';
    }
};