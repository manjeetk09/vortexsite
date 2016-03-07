
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

$overlay1.append($(".lbContent1"));
$overlay2.append($(".lbContent2"));
$overlay3.append($(".lbContent3"));
$overlay4.append($(".lbContent4"));
$overlay5.append($(".lbContent5"));
$overlay6.append($(".lbContent6"));
$overlay7.append($(".lbContent7"));
$overlay8.append($(".lbContent8"));
$overlay9.append($(".lbContent9"));

console.log("manjeet");
///////////////////////////////////////////////////////////////////////// overlay1

$(".eventsdetailed1 a").click(function(event) {
	event.preventDefault();
	$(".overlaydiv").append($overlay1);
	$overlay1.show();
	
});


$(".homebtn1 a").click(function(event) {
	$("#bplanbtn").trigger("click");
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

$(".eventsdetailed2 a").click(function(event) {
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

$(".eventsdetailed3 a").click(function(event) {
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

$(".eventsdetailed4 a").click(function(event) {
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

$(".eventsdetailed5 a").click(function(event) {
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

$(".eventsdetailed6 a").click(function(event) {
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

$(".eventsdetailed7 a").click(function(event) {
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

$(".eventsdetailed8 a").click(function(event) {
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

$(".eventsdetailed9 a").click(function(event) {
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
