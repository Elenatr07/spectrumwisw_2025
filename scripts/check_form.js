$(document).ready(function () {

//	$(".phone").mask("(99) 9999?9-9999");



	$('#send-form').click(function () {
		var form = $(this).closest('form');
		
		

		if (form.valid()) {
			form.css('opacity', '.5');
			var actUrl = form.attr('action');

			jQuery.ajax({
				url: actUrl,
				type: 'post',
				dataType: 'html',
				data: form.serialize(),
				success: function (data) {

					//form.html(data);
					form.css('opacity', '1');
					form.find('.status').html('form submitted successfully');
					form.find('.status').css('opacity', '1');
					//$('#myModal').modal('show') // для бутстрапа

				},

				error: function () {
					form.find('.status').html('Error');
				}
			});
		}

	});


});
function clearform() {
	document.getElementById("formname").value = ""; //don't forget to set the textbox id
	document.getElementById("formemail").value = "";
	document.getElementById("formtext").value = "";
}


