const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const array_lenght= slides.length;
let array_selected=0;
let i=0;
dot_slide_function (array_selected);
/*function gestion des fleches */
function select_slide_image (array_lenght,array_selected) {
	slider_arrow_left.addEventListener('click', function() {
		array_selected--;
		if (array_selected<0){
			array_selected=array_lenght- 1;
		}
		dot_erase_function();
		image_slide_function(array_selected);
		text_slide_function(array_selected);
		dot_slide_function(array_selected);
		console.log('arro_left Clic gauche'+array_selected);

	});
	
	slider_arrow_right.addEventListener('click', function(event) {
		array_selected++;
		if (array_selected>=array_lenght){
			array_selected=0;
		}
		dot_erase_function();
		image_slide_function(array_selected);
		text_slide_function(array_selected);
		dot_slide_function(array_selected);
		console.log('arrow_right Clic gauche'+array_selected);
	});
	
	return array_selected;
}


select_slide_image(array_lenght,array_selected);

console.log(array_selected);
/*function génération des points */
function dot_slide_function (array_selected){
	let SliderContainerDot = document.getElementById('slider_dot_list');
	console.log(array_lenght);
	for (i=0;i<array_lenght;i++){
		let SliderDot = document.createElement('div');
		SliderDot.classList.add('dot');
		if (i==array_selected){
			SliderDot.classList.add('dot_selected');
			console.log(array_selected);
		}
		SliderContainerDot.appendChild(SliderDot);
	}
}

/*function effacer les points */
function dot_erase_function() {
	const SliderContainerDot = document.getElementById('slider_dot_list');
	while (SliderContainerDot.firstChild) {
	  SliderContainerDot.removeChild(SliderContainerDot.firstChild);
	}
}

/* function pour changer l'image de la banniére*/
function image_slide_function (array_selected){
	let SliderImage = document.getElementById('slider_img');
	SliderImage.src='./assets/images/slideshow/'+slides[array_selected].image
}

/* function pour changer le texte de l'image*/
function text_slide_function (array_selected){
	let SliderText = document.getElementById('slider_text');
	SliderText.innerHTML=slides[array_selected].tagLine
}
