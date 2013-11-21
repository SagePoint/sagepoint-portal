SagepointPortal.UsersLoginController = Ember.ObjectController.extend({

	actions: {
		login: function() {
			var email = this.get('email');
			var pass = this.get('password');
			console.log("Host: " + SagepointPortal.api_base + "/" + SagepointPortal.api_version);

			$.ajax({
				type: 'POST',
				url: SagepointPortal.api_base + '/' + SagepointPortal.api_version + '/users/sign_in',
				data: {
					password: pass,
					email: email,
				},
				crossDomain: true,
				success: function(data) {
					if(data.success === true) {
						$.cookie('auth_token', data.token);
						$.cookie('email', email);
						$("#auth_token").val(data.token);
						$(".form-signin")
							.attr("action", SagepointPortal.legacy_sign_in)
							.submit();
					} else {
						$.notifyBar({html: data.errors[0], cssClass: "error"});
					}

				},
				error: function(xhr, status, errorThrown) {
					jQuery.notifyBar({html: JSON.parse(xhr.responseText).errors[0], cssClass: 'error'});
				},
				dataType: 'json'
			});
		}
	}

});