
window.onload = () =>{

    let video = document.querySelector('#video'),
         recorded = document.querySelector('#vid2'),
         start = document.querySelector('.start'),
         stop = document.querySelector('.stop'),
         scroll = document.querySelector('input'),
         sound = document.createElement('audio'),
         chunks = [],
         videoDuration;

         video.onloadedmetadata=function(){
           
           videoDuration = video.duration;
           
           scroll.setAttribute('max',`${videoDuration}`);
         }
       

    let stream = video.captureStream(),
        record = new MediaRecorder(stream);

         

        start.addEventListener('click',function(){
            video.play();
            record.start();
            console.log(record.state);    
     
        });


        scroll.addEventListener('change',function(){
          // alert(scroll.value);
          video.currentTime = scroll.value;
        });                                                                                                                                                                                               


        stop.addEventListener('click',function(){
          console.log('stopped');
          record.stop();
          console.log( record.state );
        });

        if(record.state && video.currentTime == videoDuration){
          record.stop();
        }


        record.ondataavailable = function(event){
          console.log('data available');
          chunks.push(event.data);
          console.log(chunks)
          let blob = new Blob(chunks,{'type': 'video/mp3'});
          console.log(blob.size);
          chunks=[];
          let vidsrc = window.URL.createObjectURL(blob);
          console.log(vidsrc);
          sound.src = vidsrc;
          document.querySelector('body').appendChild(sound);
        }

      
    

    
   
  
  }


