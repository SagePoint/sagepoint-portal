Ember.FEATURES["query-params"] = true;

// Ember.$.ajaxSetup({
//     beforeSend: function(xhr) {
//         xhr.setRequestHeader('', 'some value');
//     }
// });

var SagepointPortal = window.SagepointPortal = Ember.Application.create({
	  LOG_TRANSITIONS: true
});

//SagepointPortal.api_base = "//api.local.sagepointsoftware.com";
//SagepointPortal.legacy_base = "//local.sagepointsoftware.com";
//SagepointPortal.api_version = "api/v1";
//SagepointPortal.legacy_sign_in = "//local.sagepointsoftware.com/account/login";
//SagepointPortal.legacy_dashboard = "//local.sagepointsoftware.com/ep/list";

// SagepointPortal.api_base = "//api.alpha.sagepointsoftware.com";
// SagepointPortal.legacy_base = "//alpha.sagepointsoftware.com";
// SagepointPortal.api_version = "api/v1";
// SagepointPortal.legacy_sign_in = "//alpha.sagepointsoftware.com/account/login";
// SagepointPortal.legacy_dashboard = "//alpha.sagepointsoftware.com/ep/list";

 SagepointPortal.api_base = "//api.stage.sagepointsoftware.com";
 SagepointPortal.legacy_base = "//www.stage.sagepointsoftware.com";
 SagepointPortal.api_version = "api/v1";
 SagepointPortal.legacy_sign_in = "//www.stage.sagepointsoftware.com/account/login";
 SagepointPortal.legacy_dashboard = "//www.stage.sagepointsoftware.com/ep/list";

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');

$(document).ready(function() {
	setTimeout(function() {
		$.notifyBar({
			html: "Welcome to the new SagePoint! As we transition, you will see some functionality in this format. Change is good =)",
			close: true,
			closeOnClick: false,
			delay: 1000000,
			cssClass: "warning",
			animationSpeed: "normal",
			position: "bottom"
		});
	}, 2000);
});
