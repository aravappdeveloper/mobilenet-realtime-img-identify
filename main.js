function setup(){
  canvas = createCanvas(300, 300);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();

  classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}

function draw(){
  image(video, 0, 0, 300, 300);
  classifier.classify(video, gotResult);
}

function modelLoaded(){
  console.log("Message for Devs --> MobileNet model has loaded!");
}

function gotResult(error, results, confidence){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    confidence = results[0].confidence.toFixed(1) * 100 + '%';
    document.getElementById("result_object_accuracy").innerHTML = confidence;
  }
}