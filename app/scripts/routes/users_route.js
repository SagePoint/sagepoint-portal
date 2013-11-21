SagepointPortal.UsersLoginRoute = Ember.Route.extend({
	model: function() {
		return {
			"email": null,
			"password": null
		};
	}

});
