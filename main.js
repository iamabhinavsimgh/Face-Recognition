

Webcam.set({
    width: 350,
    height: 300,
    image_format:"png",
    png_quality:100

})

camera=document.getElementById("camera")
Webcam.attach("#camera")

function  takeSnapshot() {
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML="<img id='snapshot' src='"+data_uri+"'/>"
    })
}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/v0b0t4O79/model.json",modelloaded)

function modelloaded() {
    console.log("modelloded")
}

function check() {
    img=document.getElementById("snapshot")
    classifier.classify(img,gotResult)
}

function gotResult(error,results) {
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        document.getElementById("name").innerHTML="Name: "+results[0].label
        document.getElementById("accuracy").innerHTML="Accuracy: "+(results[0].confidence*100).toFixed(1)+"%"
    }
}