window.onload = function() {
  console.log('JS is in');
  var writeMe = document.getElementById('writeMe');

  var TextCall = 'Vincent <em> KeynesYouDigIt </em> Buscarello';

  var ImageCall = '<img src="img/showme.jpg" width="25%" height="25%">';

  writeMe.innerHTML = TextCall;
  
  writeMe.addEventListener("click", function () {
  	console.log('clicked writeme')
  	switch (writeMe.innerHTML) {
  		case TextCall:
  			writeMe.innerHTML = ImageCall;
  			/*writeMe.insertAdjacentHTML('afterend','<br> <font font-size = "12px"">\
  								This site shows you my extensive capabilities \
  								in the world of programming and data analysis</font>');
  			breaks switch....*/

  			console.log(ImageCall)
  			break;
  		case ImageCall:
  		  	writeMe.innerHTML = TextCall;
  			break;
  		};
  });

  menu.addEventListener('click', function(e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
  });	

};