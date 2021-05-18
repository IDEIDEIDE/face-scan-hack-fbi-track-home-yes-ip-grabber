Webcam.set({
    width: 350,
    height: 350,
    image_format: "png",
    png_quality: 90


})
    
camera = document.getElementById("camera")

Webcam.attach(camera)

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id = 'captured_image' src = " + data_uri + ">"
    })
}
console.log("Jojomojo Version :", ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json", ModelLoaded )

function ModelLoaded(){
    console.log("Model Loaded  GOOD JOB JOJOMOJOMOJO")
}

function check(){
    img = document.getElementById("captured_image");

    classifier.classify(img, gotResult)
}

function gotResult(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)

        document.getElementById("object_result").innerHTML = results[0].label
        document.getElementById("accuracy_result").innerHTML = results[0].confidence.toFixed(3)

    }
}