
$(document).ready(function () {
    $("h1").click(function () {
        alert("This is a header.");
    });
});



$(document).ready(function () {
    $("button").click(function (event) {
        event.preventDefault();
    });
});
