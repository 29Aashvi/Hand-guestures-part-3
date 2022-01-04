Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function capture(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });

}

console.log("ml5 version: ", ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/yYmC1qkle/model.json', modelLoaded);

function modelLoaded(){
    console.log("modelLoaded");
}



function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img, gotResult);

}

function gotResult(error,results){
if(error){
    console.error(error);

}



else{
    console.log(results);
    document.getElementById("result_guesture_name").innerHTML=results[0].label;   

    if(results[0].label=="Victory"){
        document.getElementById("update_hand_guesture").innerHTML="✌";
    }
    else if(results[0].label=="Thumbs up"){
        document.getElementById("update_hand_guesture").innerHTML="👍";
    }
    else if(results[0].label=="Amazing"){
        document.getElementById("update_hand_guesture").innerHTML="👌";
    }

}
}