Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quailty:90
});
camera=document.getElementById("cam");
Webcam.attach('#camera');
function takesnapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("output").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 verison',ml5.verison);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/B9dV60t2n/model.json',modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}