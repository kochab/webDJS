/// <reference path="webdjs.ts" />
var WebDJS;
(function (WebDJS) {
    var Wiring;
    (function (Wiring) {
        function wireVJ(doc) {
            return {
                left: {
                    midiActive: doc.getElementById("leftCtrl"),
                    video: doc.getElementById("leftVideo") || doc.createElement("video"),
                    volume: doc.getElementById("volumeLeft"),
                    volumeSpinner: doc.getElementById("volumeLeftField"),
                    speed: doc.getElementById("speedLeft"),
                    speedSpinner: doc.getElementById("speedLeftField"),
                    red: doc.getElementById("RLeft"),
                    redSpinner: doc.getElementById("RLeftField"),
                    green: doc.getElementById("GLeft"),
                    greenSpinner: doc.getElementById("GLeftField"),
                    blue: doc.getElementById("BLeft"),
                    blueSpinner: doc.getElementById("BLeftField"),
                    rotation: doc.getElementById("RotLeft"),
                    rotationSpinner: doc.getElementById("RotLeftField"),
                    translationXSpinner: doc.getElementById("TranslationXLeftField"),
                    translationYSpinner: doc.getElementById("TranslationYLeftField"),
                    scale: doc.getElementById("ScaleLeft"),
                    scaleSpinner: doc.getElementById("ScaleLeftField"),
                    playingTime: doc.getElementById("timeLeft"),
                    filterOne: doc.getElementById("leftFilterOne"),
                    filterTwo: doc.getElementById("leftFilterTwo"),
                    fileInput: doc.getElementById("leftLoad"),
                    playButton: doc.getElementById("leftButtonPlay"),
                    stopButton: doc.getElementById("leftButtonStop"),
                    resetButton: doc.getElementById("leftButtonStop")
                },
                right: {
                    midiActive: doc.getElementById("rightCtrl"),
                    video: doc.getElementById("rightVideo") || doc.createElement("video"),
                    volume: doc.getElementById("volumeRight"),
                    volumeSpinner: doc.getElementById("volumeRightField"),
                    speed: doc.getElementById("speedRight"),
                    speedSpinner: doc.getElementById("speedRightField"),
                    red: doc.getElementById("RRight"),
                    redSpinner: doc.getElementById("RRightField"),
                    green: doc.getElementById("GRight"),
                    greenSpinner: doc.getElementById("GRightField"),
                    blue: doc.getElementById("BRight"),
                    blueSpinner: doc.getElementById("BRightField"),
                    rotation: doc.getElementById("RotRight"),
                    rotationSpinner: doc.getElementById("RotRightField"),
                    translationXSpinner: doc.getElementById("TranslationXRightField"),
                    translationYSpinner: doc.getElementById("TranslationYRightField"),
                    scale: doc.getElementById("ScaleRight"),
                    scaleSpinner: doc.getElementById("ScaleRightField"),
                    playingTime: doc.getElementById("timeRight"),
                    filterOne: doc.getElementById("rightFilterOne"),
                    filterTwo: doc.getElementById("rightFilterTwo"),
                    fileInput: doc.getElementById("rightLoad"),
                    playButton: doc.getElementById("rightButtonPlay"),
                    stopButton: doc.getElementById("rightButtonStop"),
                    resetButton: doc.getElementById("rightButtonStop")
                },
                canvas: doc.getElementById("canvas"),
                fader: doc.getElementById("fadeRange"),
                midiState: doc.getElementById("midi"),
                midiChoice: doc.getElementById("midiChoice")
            };
        }
        Wiring.wireVJ = wireVJ;
    })(Wiring = WebDJS.Wiring || (WebDJS.Wiring = {}));
})(WebDJS || (WebDJS = {}));
