var SagepointPortal = window.SagepointPortal = Ember.Application.create({
	  LOG_TRANSITIONS: true
});

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