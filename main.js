'use strict';

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
		inputForm();
	}
});

function inputForm() {
    let columns;

    if (location.href.match(URL_TYPE1)) {
        columns = COLUMNS_TYPE1;
    } else if (location.href.match(URL_TYPE2)) {
        columns = COLUMNS_TYPE2;
    } else if (location.href.match(URL_TYPE3)) {
        columns = COLUMNS_TYPE3;
    }

    if (!columns) {
        return
    }

    for (let id in columns) {
        const element = document.getElementById(id);
        if (element) {
            element.value = columns[id];
        }
    }
}
