window.addEventListener('load',function(){
    const canvas = document.querySelector('canvas');
    const cropped = document.querySelector('img');
    const image =  new Image();
    image.src="./assets/pictures/uzumaki.jpg";

    

    canvas.width=300;
    canvas.height=700;
    canvas.style.border = '2px solid green';

    let context = canvas.getContext('2d');

    image.addEventListener('load',function(){
            let w = canvas.width,
                nw = image.naturalWidth,
                nh = image.naturalHeight,
                aspect = nw/nh;
              //  h = canvas.height = canvas.width/aspect; 

              //350 is the First coordinate is the x position of where cropping begins
              //230 is the Second coordinate is the y position of where the cropping begins
              //145 Coordinate is the width of the cropped image begining froin point (a,b)
              //70  coordinate is the height of the cropped image, 
              //0   coordinate is the x position of the cropped object in the canvas
              //0   coordinate is the y position of the cropped object in the canvas
              //145 coordinate the width the image should display with
              //60  coordinate is the height the image should display with
                context.drawImage(image,350,230,145,70,0,0,145,60);
                
                //Passes the Image in the canvas to the empty <img/> in the html  
                cropped.src = canvas.toDataURL();

        });

});