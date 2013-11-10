SagepointPortal.PasswordRoute = Ember.Route.extend({
	model: function(params, queryParams) {
		return queryParams;
	}

});
