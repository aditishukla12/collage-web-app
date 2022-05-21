var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start (){
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript.toLowerCase();
    console.log(content);
    if(content=="take my selfie"){
        console.log("taking selfie ---");
        speak();
    }

}
function speak(){
var synth=window.speechSynthesis;
speak_data="taking your selfie in 5 seconds";
console.log("this is speak function");
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera);
setTimeout(function(){
    img_id="selfie1";
    take_selfie();
    speak_data="taking your next selfie in 10 seconds"; 
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
   
},5000);
setTimeout(function(){
    img_id="selfie2";
    take_selfie();
    speak_data="taking your next selfie in 15 seconds"; 
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
   
},10000);
setTimeout(function(){
    img_id="selfie3";
    take_selfie();
    
   
},15000);
}
camera=document.getElementById("camera");
Webcam.set({
    width: 500,
    height: 400,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 
 function take_selfie(){
   Webcam.snap(function(data_uri){
       if(img_id=="selfie1"){
       document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'"/>';
       }
       if(img_id=="selfie2"){
        document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'"/>';
        } 
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML='<img id="selfie3" src="'+data_uri+'"/>';
            }
   });  
 }
