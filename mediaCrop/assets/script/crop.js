 
 
 
 window.addEventListener('load',function(){
   let pic = document.querySelector('canvas');
   

   pic.height =600;
   pic.width = 500;
   pic.style.border = '2px solid red';


    let context = pic.getContext('2d');
    let image = new Image();

    console.log(image);


   image.src="./assets/pictures/drone-shot-high-angle-shot-man-2120084.jpg";

   //callback, called when the image is loaded

   image.addEventListener('load',function(){
       //image(image,src,srcy)
       //context.drawImage(image,0,0,image.naturalWidth/3,image.naturalWidth/3);
      let tempCanvas =  document.createElement('canvas');

      tempCanvas.width = 200;
      tempCanvas.height = 300;
      //Ref drawing api
      var tempCanvasContext = tempCanvas.getContext('2d');
      tempCanvasContext.drawImage(image,0,0,tempCanvas.width,tempCanvas.height);

       var pattern = context.createPattern(image,'repeat');

       context.fillStyle = pattern;

       context.fillRect(310,200,300,200);

       context.beginPath();
       context.arc(110 ,110,100,0.,Math.PI*2);
       context.fill();
   });


    

  
 });