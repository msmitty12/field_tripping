$(document).ready(function(){
var folder = "../images/pictures/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                $("#pictures").append( "<img src='"+ folder + val +"'>" );
            }
        });
    }
});
});
