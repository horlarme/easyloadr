/**
 * This library fetches content of a link (page) and display the contents
 * on the current page leaving the page not loading to another page
 * @author Lawal Oladipupo <lawaloladipupo@outlook.com>
 * @version 1.0
 * @name EasyLoadr
 * @file easyloadr.js
 **/

var easyloadr = {
    /**
     * Starting the object
     */
    init: function () {
        /**
         * Create loading bar to document
         */
        easyloadr.createLoadingBar();
        /**
         * Getting the full list of all items that will be easyloadr-ed
         * @type {NodeList}
         */
        links = document.querySelectorAll('[easy-load-url]');
        /**
         * Looping through each of the list and attaching a click event to them all
         */
        for (var l = 0; l <= links.length; l++) {
            /**
             * Skipping any item having null or undefined
             */
            if (undefined == links[l]) {
                continue;
            }
            /**
             * Attach onclick event to element
             * @type {EasyLoadr.clicked}
             */
            links[l].onclick = easyloadr.clicked;
        }
    },
    /**
     * Assigned clicked function to the items
     * @param e Click
     */
    clicked: function (e) {
        //The link to fetch from
        link = e.target.getAttribute('easy-load-url');
        //Method
        method = e.target.getAttribute('easy-load-method');
        //The target ID, Class Name or Element Selector Name
        target = e.target.getAttribute('easy-load-target');
        //The target element itself
        targetElement = document.querySelector(target);

        /**
         * Fetching content of the link
         */
        easyloadr.fecthContent(targetElement, link);
    },
    ajax: function () {
        a = window.XMLHttpRequest ? new window.XMLHttpRequest :
            (window.ActiveXObject("Microsoft.XMLHTTP") ? new window.ActiveXObject("Microsoft.XMLHTTP") : new ActiveXObject('Msxml2.XMLHTTP') )
        return a;
    },
    createLoadingBar: function () {
        o = "<div easy-load-loading></div>";
        document.body.innerHTML += o;
    },
    loadingBar: function () {
        return document.querySelector('[easy-load-loading]');
    },
    hideLoading: function(){
        easyloadr.loadingBar().style.display = 'none';
    },
    load: function (percentage = '10%', response = '') {
        easyloadr.loadingBar().style.display = 'inline';
        easyloadr.loadingBar().style.width = percentage;
        switch (response) {
            case 'success':
                easyloadr.loadingBar().style.background = 'green';
                break;
            case 'error':
                easyloadr.loadingBar().style.background = 'red';
                break;
            default:
                easyloadr.loadingBar().style.background = 'blue';
                break;
        }
        setTimeout(easyloadr.hideLoading(), 3000);
    },
    fecthContent: function (target, link, method = 'GET') {
        a = easyloadr.ajax();
        a.open(method, link, true);
        a.setRequestHeader('Accept', 'text/html');
        a.setRequestHeader('Content-Type', 'text/html');
        a.onreadystatechange = function () {
            switch (a.readyState) {
                case 2:
                    easyloadr.load('10%');
                    break;
                case 3:
                    easyloadr.load('15%');
                    break;
                case 4:
                    switch (a.status) {
                        case 404:
                            easyloadr.load('50%', 'error');
                            break;
                        case 200:
                            easyloadr.load('100%', 'success');
                            target.innerHTML = a.response;
                            break;
                        default:
                            easyloadr.load('25%', 'error');
                            break;
                    }
                    break;
            }
        };
        a.send(null);
    }
};