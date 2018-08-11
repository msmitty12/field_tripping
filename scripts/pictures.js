$(document).ready(function(){
	var dir = "../images/pictures/";

	$.ajax ({
		url : dir,
		success : function (data) {
			$(data).find("a").attr("href", function (i, val) {
				if (val.match(/\.(jpeg|jpg|png|gif)%/) ) {
					$("#pictures").append( "<div class=\"col-sm-12 col-md-6 col-lg-12\"> <img src='" + dir + val + "'></div>" );
				}
			});
		}
	});
});
