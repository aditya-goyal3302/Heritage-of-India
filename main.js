var index = 0;
main_photo_slideshow();

function main_photo_slideshow() {
  var i;
  var x = document.getElementsByClassName("main_image");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  index++;
  if (index > x.length) {index = 1}    
  x[index-1].style.display = "inline";  
  setTimeout(main_photo_slideshow, 8000);
}

