//https://teachablemachine.withgoogle.com/models/KIisRttcA/model.json


function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json',modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }else{console.log(results);
    document.getElementById("result_name").innerHTML="i can hear "+results[0].label;
    document.getElementById("result_confidence").innerHTML="Accuracy "+(results[0].confidence*100).toFixed(2)+"%";
    img=document.getElementById("aliens-01");
    img1=document.getElementById("aliens-02");
    img2=document.getElementById("aliens-03");
    img3=document.getElementById("aliens-04");
    if(results[0].label=="Clap"){
        img.src="aliens-01.gif";
        img1.src="aliens-02.png";
        img2.src="aliens-03.png";
        img3.src="aliens-04.png";
    }
    else if(results[0].label=="Bell"){
        img.src="aliens-01.png";
        img1.src="aliens-02.gif";
        img2.src="aliens-03.png";
        img3.src="aliens-04.png";
    }
    else if(results[0].label=="Snapping"){
        img.src="aliens-01.png";
        img1.src="aliens-02.png";
        img2.src="aliens-03.gif";
        img3.src="aliens-04.png";
    }
    else (results[0].label=="Bell"){
        img.src="aliens-01.png";
        img1.src="aliens-02.png";
        img2.src="aliens-03.png";
        img3.src="aliens-04.gif";
    }
    }
}