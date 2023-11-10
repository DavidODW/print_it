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


const array_lenght= slides.length; /*je récupére la taille du tableau */
let array_selected=0;/*j'initialise une vaiable qui me servira de pointeur sur une diapositive du tableau slides*/
let i=0; /*incrementation pour mes boucles*/

dot_slide_function (array_selected); /*j'appelle une premiere fois le bullet point pour qu'il apparaisse au chargement de la page*/
select_slide_image(array_lenght,array_selected); /*j'appelle ma fonction de selection de slide*/

/*function gestion des fleches */
function select_slide_image (array_lenght,array_selected) {
	slider_arrow_left.addEventListener('click', function() {/* j'écoute le clic sur la fléche gauche*/
		array_selected--; /*en cas de clic la variable array_selected et réduite de 1 */
		if (array_selected<0){ /*si la valeur de array_selected est plus petite que 0, depassement par le bas du tableau je renvois mon pointeur a la valeur array_lenght-1 (defilement infini)*/
			array_selected=array_lenght- 1;
		}	
		/*j'apelle mes fonctions qui gérent l'image ,le texte et le bullet point */
		image_slide_function(array_selected);
		text_slide_function(array_selected);
		dot_slide_function(array_selected);
		console.log('arro_left Clic gauche'+array_selected);

	});
	
	slider_arrow_right.addEventListener('click', function() {/* j'écoute le clic sur la fléche droit*/
		array_selected++;/*en cas de clic la variable array_selected et incrémenter de 1 */
		if (array_selected>=array_lenght){/*si la valeur de array_selected est plus grande que la taille du tableau (array_lenght),dépassement du tableau par le haut je renvois mon pointeur a la valeur 0 (defilement infini)*/
			array_selected=0;
		}	
		/*j'apelle mes fonctions qui gérent l'image ,le texte et le bullet point */
		image_slide_function(array_selected);
		text_slide_function(array_selected);
		dot_slide_function(array_selected);
		console.log('arrow_right Clic gauche'+array_selected);
	});
		
}

/*function génération des points */
function dot_slide_function (array_selected){
	dot_erase_function();/*si des points sont déja présent les effacés */
	let SliderContainerDot = document.getElementById('slider_dot_list');/*récupére la div qui vat contenir les bullet points */
	for (i=0;i<array_lenght;i++){/*vat créer un point pour chaque entrée du tableau */
		let SliderDot = document.createElement('div');
		SliderDot.classList.add('dot');
		if (i==array_selected){/*quand le point créer correspond au slide en cour je lui donne la class (dot_slected) */
			SliderDot.classList.add('dot_selected');
		}
		SliderContainerDot.appendChild(SliderDot);
	}
}

/*function effacer les points */
function dot_erase_function() { /*si un point est présent dans slider_dot_list la fonction l'efface et recommence jusqu'à ce que la div soit vide */
	const SliderContainerDot = document.getElementById('slider_dot_list');
	while (SliderContainerDot.firstChild) {
	  SliderContainerDot.removeChild(SliderContainerDot.firstChild);
	}
}

/* function pour changer l'image de la banniére*/
function image_slide_function (array_selected){
	let SliderImage = document.getElementById('slider_img');/*j'assigne le tableau correspondant à l'id slider_img à ma variable SliderImage  */
	SliderImage.src='./assets/images/slideshow/'+slides[array_selected].image /*je modifie la valeur src de mon tableau en y mettant une valeur dépendant du slide en cour ( arrau_selected) */
}

/* function pour changer le texte de l'image*/
function text_slide_function (array_selected){
	let SliderText = document.getElementById('slider_text');/*j'assigne le tableau correspondant à l'id slider_text à ma variable SliderText  */
	SliderText.innerHTML=slides[array_selected].tagLine /* je modifie le contenu de la balise <p> en lui affectant le texte correspondant au slide selectionné avec innerhtml*/
}
