let canvas = document.getElementsByTagName('canvas')[0],
   
    section = document.querySelector('section');
    height_Slider = document.getElementById('cropHeight'),
    width_Slider = document.getElementById('cropWidth'),
    crop_button = document.getElementById('crop'),
    crop   = document.getElementById('cropped');

    canvas.style.border = "2px solid  #4CAF50";
    context = canvas.getContext('2d');
  
// Defines the Initial Height and Width of the Image
    // canvas.height  = 350;
    // canvas.width = 650;
    console.log(crop);
// Sets the height of the cropped Image
    height_Slider.addEventListener('change',function(){
       
        console.log('Height : '+ height_Slider.value);
        canvas.height = height_Slider.value;
        context.drawImage(image,0,0,canvas.width,canvas.height,0,0,canvas.width,canvas.height);
    });
// Sets the Width of the Cropped Image
    width_Slider.addEventListener('change',function(){
        canvas.width = width_Slider.value;
        console.log('Width: ' +width_Slider.value);
        context.drawImage(image,0,0,canvas.width,canvas.height,0,0,canvas.width,canvas.height);
    });

    

//Creates a new Image object to be cropped
    image  = new Image();
   
// Specifies the Image to be crop
    image.src = "./assets/pictures/wp2321498.jpg";

// Generate the image once the Crop Now Button has been Clicked
    image.addEventListener('load',function(){

         height_Slider.max = image.naturalHeight;
         width_Slider.max = image.naturalWidth;
         height_Slider.value = image.naturalHeight;
         width_Slider.value = image.naturalWidth;
         canvas.style.height= `${image.naturalHeight}`;
       canvas.width = width_Slider.value;
       canvas.height = height_Slider.value;
        context.drawImage(image,0,0);
        // let w = canvas.width,
        //     nw = this.naturalWidth,
        //     nh = this.naturalHeight,
        //     aspect = this.naturalWidth/this.naturalHeight;
         //   h = canvas.height  = 350;
        console.log('image has fully loaded');
     //   context.drawImage(image,400,100,650,350,0,0,500,350);
     //   context.drawImage(image,0,0,image.naturalWidth,image.naturalHeight);
     //   context.drawImage(image,0,0,image.naturalWidth,image.naturalHeight);
     //   context.drawImage(image,0,0,image.naturalWidth,image.naturalHeight);  
    });
    
    crop_button.addEventListener('click',function(){
       //Generates the url of the cropped images......from here you can include the code for 
       //sending the image to the server
         crop.src = canvas.toDataURL('image/jpeg',2);
    });
    

