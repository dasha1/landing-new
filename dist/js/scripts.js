var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

var scene_1 = document.getElementById('scene_1');
var parallax = new Parallax(scene_1);

$(document).ready(function () {
    $('#map').addClass('scrolloff');
    $('#overlay').on('click', function () {
        $('#map').removeClass('scrolloff');
    });
    $("#map").mouseleave(function () {
        $('#map').addClass('scrolloff');
    });
});
$('#nav-icon').click(function(){
    $(this).toggleClass('active');
});
