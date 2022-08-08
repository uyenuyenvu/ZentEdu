var slideIndex=1;
slideShow();

setInterval(function(){
	slideIndex=slideIndex+1;
	slideShow();
},5000)
function slideShow(){

	var slides = document.getElementsByClassName('slide');
	if(slideIndex > slides.length){
		slideIndex=1;
	}
	if(slideIndex < 1){
		slideIndex= slides.length;
	}
	for(var i=0; i<slides.length; i++){
		slides[i].classList.remove('active');
	}
	slides[slideIndex-1].classList.add('active');

	var dots=document.getElementsByClassName('dot');
	for(var j=0; j<dots.length; j++){
		dots[j].classList.remove('dot_active');
	}
	dots[slideIndex-1].classList.add('dot_active');
}
document.getElementById('next').addEventListener('click', function(){
	slideIndex+=1;
	slideShow();
})
document.getElementById('prev').addEventListener('click', function(){
	slideIndex-=1;
	slideShow();
})
function activeDot(n){
	slideIndex=n;
	slideShow();
}