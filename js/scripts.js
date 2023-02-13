
let menu =  document.querySelector ('#menu');

let menu_bar =  document.querySelector ('#menu-bar');

menu_bar.addEventListener ('click', function() {

	menu.classList.toggle('menu-toggle');

})

$( document ).ready(function(){
	$('.carousel').carousel({
		interval: 4000
	})
});
