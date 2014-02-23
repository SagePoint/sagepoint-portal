SagepointPortal.ContactController = Ember.ObjectController.extend({

	actions: {
		send: function() {
			var email = this.get('fromEmail');
			var body = this.get('body');

			if(email === null || !email.match(/.+@.+\..{2,4}/)) {
				$.notifyBar({html: "Please enter a valid email", cssClass: "error"});
				return;
			}

			if(body === null || body.length < 15) {
				$.notifyBar({html: "Please enter a minimum of 15 characters in your message", cssClass: "error"});
				return;
			}

			$.ajax({
				type: 'POST',
				url: SagepointPortal.api_base + '/' + SagepointPortal.api_version + '/contact',
				data: {
					fromEmail: email,
					body: body,
				},
				success: function(data) {
					if(data.success === true) {
						$.notifyBar({html: data.message, cssClass: "success"});
					} else {
						$.notifyBar({html: data.errors[0], cssClass: "error"});
					}

				},
				error: function(xhr, status, errorThrown) {
					if(typeof xhr.responseText === 'undefined') {
						$.notifyBar({html: "An connection error occured", cssClass: 'error'});
					} else {
						$.notifyBar({html: JSON.parse(xhr.responseText).errors[0], cssClass: 'error'});
					}
				},
				dataType: 'json'
			});
		}
	}

});
