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
	$('#formname').val("") 
	$('#formemail').val("")
	$('#formtext').val("")
	
}


