SagepointPortal.PasswordController = Ember.ObjectController.extend({

	token: function() {
		return this.get('model.reset_password_token');
	}.property('model.reset_password_token'),

	actions: {
		update: function() {
			var token = this.get('reset_password_token');
			var pass = this.get('password');
			var match = $("#match").val();
			console.log("Host: " + SagepointPortal.api_base + "/" + SagepointPortal.api_version);
			if(pass !== match) {
				$.notifyBar({ html: "Oops, your passwords don't match", cssClass: "error"});
				return;
			}

			$.ajax({
				type: 'PUT',
				url: SagepointPortal.api_base + '/' + SagepointPortal.api_version + '/users/password',
				data: {
					password: pass,
					password_confirmation: match,
					reset_password_token: token
				},
				crossDomain: true,
				success: function(data) {
					if(data.success === true) {
						$.notifyBar({html: "Password Changed!", cssClass: "success"});
						setTimeout(function() {
							location.href = SagepointPortal.legacy_sign_in;
						}, 500);

					} else {
						$.notifyBar({html: "Oops, there was an error!", cssClass: "error"});
					}

				},
				error: function() {
					$.notifyBar({html: "Oops, there was an error", cssClass: "error"});
				},
				dataType: 'json'
			});
		}
	}

});