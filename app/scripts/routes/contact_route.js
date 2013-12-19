SagepointPortal.ContactRoute = Ember.Route.extend({
	model: function() {
		return {
			"fromEmail": null,
			"subjects": ["I'm having a technical problem", "I can't login", "You need someone to talk to"],
			"selectedSubject": "I can't login",
			"body": null
		};
	}
});
