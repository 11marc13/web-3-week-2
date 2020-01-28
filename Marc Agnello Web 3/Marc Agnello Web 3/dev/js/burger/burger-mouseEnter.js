var lineToLine = gsap.timeline({paused:true});
lineToLine.to("#left-line",{duration:0.05, morphSVG: "#record-circle"}, "morph")
.to("#right-line",{duration:0.25, morphSVG: "#record-line"}, "morph")
.to("#middle-line",{duration:0.25, morphSVG: "#record-circle-small"}, "morph")
.to("#record-dot", {alpha:1}, "morph")

$("#burger-container").on("mouseenter", function(){
    console.log("mouse enter");

    if(canYouSeeNav === false){
        // play the timeline to combine the lines into 1 line
        lineToLine.play();
    }

});
