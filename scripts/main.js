document.getElementById("current_page").innerHTML = "Hello!"

var nav_bar = $("#navbarNav a");

nav_bar.on("click", function () {
   document.getElementById("current_page").innerHTML = "Nice click!" // responds to a click by saying 'Nice click!'
});
