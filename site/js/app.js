
// Lighbox


var $overlay1 = $('<div id="overlay1" class="overlay" ></div>');
var $overlay2 = $('<div id="overlay2" class="overlay" ></div>');
var $overlay3 = $('<div id="overlay3" class="overlay" ></div>');
var $overlay4 = $('<div id="overlay4" class="overlay" ></div>');
var $overlay5 = $('<div id="overlay5" class="overlay" ></div>');
var $overlay6 = $('<div id="overlay6" class="overlay" ></div>');
var $overlay7 = $('<div id="overlay7" class="overlay" ></div>');
var $overlay8 = $('<div id="overlay8" class="overlay" ></div>');
var $overlay9 = $('<div id="overlay9" class="overlay" ></div>');
var $overlaya = $('<div id="overlaya" class="overlay" ></div>');

var $overlayb = $('<div id="overlayb" class="overlay" ></div>');
var $overlayx = $('<div id="overlayx" class="overlay" ></div>');


$overlay1.append($(".lbContent1"));
$overlay2.append($(".lbContent2"));
$overlay3.append($(".lbContent3"));
$overlay4.append($(".lbContent4"));
$overlay5.append($(".lbContent5"));
$overlay6.append($(".lbContent6"));
$overlay7.append($(".lbContent7"));
$overlay8.append($(".lbContent8"));
$overlay9.append($(".lbContent9"));
$overlaya.append($(".lbContenta"));

$overlayb.append($(".lbContentb"));
$overlayx.append($(".lbContentx"));


///////////////////////////////////////////////////////////////////////// overlay1

$("#eventButton1").click(function(event) {
	event.preventDefault();
	$(".overlaydiv").append($overlay1);
	$overlay1.show();
	
});

$overlay1.click(function() {
		// hide the overlay.
		$overlay1.hide();
});


$(".lbButton2").click(function() {
		// hide the overlay.
		$overlay1.hide();
});

///////////////////////////////////////////////////////////////////////// overlay2

$("#eventButton2").click(function(event) {
	event.preventDefault();
	$("body").append($overlay2);
	$overlay2.show();
});

$overlay2.click(function() {
		// hide the overlay.
		$overlay2.hide();
});

$(".lbButton2").click(function() {
		// hide the overlay.
		$overlay2.hide();
});

///////////////////////////////////////////////////////////////////////// overlay3

$("#eventButton3").click(function(event) {
	event.preventDefault();
	$("body").append($overlay3);
	$overlay3.show();
});

$overlay3.click(function() {
		// hide the overlay.
		$overlay3.hide();
});

$(".lbButton2").click(function() {
		// hide the overlay.
		$overlay3.hide();
});

///////////////////////////////////////////////////////////////////////// overlay4

$("#eventButton4").click(function(event) {
	event.preventDefault();
	$("body").append($overlay4);
	$overlay4.show();
});

$overlay4.click(function() {
		// hide the overlay.
		$overlay4.hide();
});

$(".lbButton2").click(function() {
		// hide the overlay.
		$overlay4.hide();
});

///////////////////////////////////////////////////////////////////////// overlay5

$("#eventButton5").click(function(event) {
	event.preventDefault();
	$("body").append($overlay5);
	$overlay5.show();
});

$overlay5.click(function() {
		// hide the overlay.
		$overlay5.hide();
});

$(".lbButton2").click(function() {
		// hide the overlay.
		$overlay5.hide();
});

///////////////////////////////////////////////////////////////////////// overlay6

$("#eventButton6").click(function(event) {
	event.preventDefault();
	$("body").append($overlay6);
	$overlay6.show();
});

$overlay6.click(function() {
		// hide the overlay.
		$overlay6.hide();
});

$(".lbButton2").click(function() {
		// hide the overlay.
		$overlay6.hide();
});
///////////////////////////////////////////////////////////////////////// overlay7

$("#eventButton7").click(function(event) {
	event.preventDefault();
	$("body").append($overlay7);
	$overlay7.show();
});

$overlay7.click(function() {
		// hide the overlay.
		$overlay7.hide();
});

$(".lbButton2").click(function() {
		// hide the overlay.
		$overlay7.hide();
});

///////////////////////////////////////////////////////////////////////// overlay8

$("#eventButton8").click(function(event) {
	event.preventDefault();
	$("body").append($overlay8);
	$overlay8.show();
});

$overlay8.click(function() {
		// hide the overlay.
		$overlay8.hide();
});

$(".lbButton2").click(function() {
		// hide the overlay.
		$overlay8.hide();
});
///////////////////////////////////////////////////////////////////////// overlay9

$(".eventsButton9 a").click(function(event) {
	event.preventDefault();
	$("body").append($overlay9);
	$overlay9.show();
});

$overlay9.click(function() {
		// hide the overlay.
		$overlay9.hide();
});

$(".lbButton2").click(function() {
		// hide the overlay.
		$overlay9.hide();
});

///////////////////////////////////////////////////////////////////////// overlaya

$("#eventButtona").click(function(event) {
	event.preventDefault();
	$("body").append($overlaya);
	$overlaya.show();
});

$overlaya.click(function() {
		// hide the overlay.
		$overlaya.hide();
});

$(".lbButton2").click(function() {
		// hide the overlay.
		$overlaya.hide();
});
///////////////////////////////////////////////////////////////////////// overlayb

$("#eventButtonb").click(function(event) {
	event.preventDefault();
	$("body").append($overlayb);
	$overlayb.show();
});

$overlayb.click(function() {
		// hide the overlay.
		$overlayb.hide();
});

$(".lbButton2").click(function() {
		// hide the overlay.
		$overlayb.hide();
});
///////////////////////////////////////////////////////////////////////// overlayx

$("#eventButtonx").click(function(event) {
	event.preventDefault();
	$("body").append($overlayx);
	$overlayx.show();
});

$overlayx.click(function() {
		// hide the overlay.
		$overlayx.hide();
});

$(".lbButton2").click(function() {
		// hide the overlay.
		$overlayx.hide();
});