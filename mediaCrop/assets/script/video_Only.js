
window.onload = () =>{

    let video = document.querySelector('#video'),
         recorded_Video = document.querySelector('#vid2'),
         start = document.querySelector('.start'),
         stop = document.querySelector('.stop'),
         scroll = document.querySelector('input'),
         sound = document.getElementById('audioSource'),
         chunks = [],
         videoDuration,timing;

console.log(sound);
  

  //  function Recorder(mediaID){


      video.onloadedmetadata=function(){
           
        videoDuration = video.duration;
         alert(videoDuration);
        scroll.max = videoDuration;
       // scroll.setAttribute('max',`${videoDuration}`);
      }
    
 let stream = video.captureStream(),
     record = new MediaRecorder(stream);

      

     start.addEventListener('click',function(){
         video.play();
         scroll.value = video.currentTime;
         record.start();
         console.log(record.state);    
  
     });


     scroll.addEventListener('change',function(){
       //alert(scroll.value);
       video.currentTime = scroll.value;
     }); 
     
    


     stop.addEventListener('click',function(){
       console.log('stopped');
       video.pause();
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
       let blob = new Blob(chunks,{'type': 'video/mp4'});
       console.log(blob.size);
       chunks=[];
       let vidsrc = window.URL.createObjectURL(blob);
       console.log(vidsrc);
       recorded_Video.src = vidsrc;
       
     }

   // }
   
  
  }


