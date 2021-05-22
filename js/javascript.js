var slider_content = document.getElementById('slider');

// contenido de imagenes en el array
var image = ['images/pasta.jpg', 'images/tarta.jpg', 'images/empanada.jpg', 'images/postre.jpg'];
var enlace = ['html/pasta.html', 'html/tartas.html', 'html/empanadas.html', 'html/postres.html'];
var i = image.length;


// function for next slide 

function nextImage(){
	if (i<image.length) {
		i= i+1;
	}else{
		i = 1;
	}
		slider_content.innerHTML =  "<a href=" + enlace[i-1] + "><img src=" +image[i-1]+ "></a>";
}


// function for prew slide

function prewImage(){
	
	if (i<image.length+1 && i>1) {
		i= i-1;
	}else{
		i = image.length;
	}
	slider_content.innerHTML =  "<a href=" + enlace[i-1] + "><img src=" +image[i-1]+ "></a>";

}

  
// script for auto image slider

setInterval(nextImage , 4000);