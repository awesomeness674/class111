prediction_1 = ""
prediction_2 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function takesnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="capturedimage" src="' + data_uri + '">'
    })
}
console.log('m15version:', ml5.version)
classifier = ml5.imageClassifier('https: //teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',
    modelLoaded
);

function modelLoaded() {
    console.log('model Loaded')

}

function speak() {
    var synth = window.speechSynthesis;
    speakdata1 = "The first prediction is" + prediction_1;
    speakdata2 = "The second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speakdata1 + speakdata2);
    synth.speak(utterThis);
}