
window.onload = () =>{

    const VideoRecordDuration = 61000;    // 1MINS in milliseconds in js
    const AudioRecodDuration = 31000;     // 30sec in Milleseconds in js

  // Declaring the variables used for video Recording 
  let video = document.querySelector('#video'),
       recorded_Video = document.querySelector('#vid2'),
       sound = document.getElementById('audioSource'),
       recorded_audio = document.querySelector('#audioRecord'),
       startVideo = document.querySelector('.startVideo'),
       stopVideo = document.querySelector('.stopVideo'),
       startAudio = document.querySelector('.startAudio'),
       stopAudio = document.querySelector('.stopAudio'),
       scroll = document.querySelector('input'),
       
       chunks = [];
var videoDuration;

    // Caputures the video's stream and passes it to Stream
let videoStream = video.captureStream(),
    // Initiates a MediaRecord instance with the Stream taken from captured stream
   record = new MediaRecorder(videoStream);

    // collects some video data after the video is  completely loaded
    video.onloadedmetadata=function(){
           videoDuration = video.duration;  
            scroll.max = videoDuration;
        
    }
 // a start button event listener to begin recording the video Stream 
   startVideo.addEventListener('click',function(){
       video.play();
    
       scroll.value = video.currentTime;
       record.start();
       console.log(record.state);  
       
       setTimeout(function(){
         record.stop();
         stopVideo.removeEventListener('click');
       },6000);  // user VideoRecodDuration instead of 6000 if your videos are longer than 1mins

   });


  // Sets the videoPlayback time to the scroll Value
   scroll.addEventListener('change',function(){
     video.currentTime = scroll.value;
   }); 
   
// a Stop event listener to stop the recording 
   stopVideo.addEventListener('click',function(){
     console.log('stopped');
     video.pause();
     record.stop();
     console.log( record.state );
   });

// After the record is stopped, this block of code removes the recorded chunks and convert them to mp4  
   record.ondataavailable = function(event){
     console.log('data available');
     chunks.push(event.data);
     console.log(chunks)
     let blob = new Blob(chunks,{'type': 'video/mp4'});
     console.log(blob.size);
     chunks=[];
// Creates and sets the source of the recorded video to the created source
     let source = window.URL.createObjectURL(blob);
     console.log(source);
     recorded_Video.src = source;
     
   }

     // Caputures the video's stream and passes it to Stream
let audioStream = sound.captureStream(),
// Initiates a MediaRecord instance with the Stream taken from captured stream
  audiorecord = new MediaRecorder(audioStream);

  startAudio.addEventListener('click',function(){
    sound.onloadedmetadata=function(){
      alert('audio Duration'+ source.duration);
    }
    sound.play();
    audiorecord.start();

    setTimeout(function(){
      audiorecord.stop();
      sound.pause();
      stopAudio.removeEventListener('click');
    },30000);
  });

  stopAudio.addEventListener('click',function(){
    audiorecord.stop();
    sound.pause();
  });

  audiorecord.ondataavailable = function(event){
    chunks.push(event.data);
    let audioblob = new Blob(chunks,{'type': 'audio/mp3'});
    chunks = [];

    let source = window.URL.createObjectURL(audioblob);
    console.log(source);
    recorded_audio.src = source;

  }


   


}


