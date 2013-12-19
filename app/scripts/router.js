SagepointPortal.Router.map(function () {
	this.resource('users', function() {
		this.resource('password', {queryParams: ['reset_password_token']}, function() {
			this.route('edit');
		});

		this.route('login');
	});
	this.route('contact');
});
