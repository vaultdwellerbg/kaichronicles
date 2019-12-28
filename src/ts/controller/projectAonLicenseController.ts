/// <reference path="../external.ts" />

/**
 * Project Aon license controller
 */
const projectAonLicenseController = {

    index: function() {
        document.title = translations.text('projectAonLicense');
        // There is no traslations of the license, so, english:
        views.loadView('projectAonLicense.html');
    }
    
};
