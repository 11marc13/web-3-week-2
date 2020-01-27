var lineToLine = gsap.timeline({paused:true});
lineToLine.to("#burger-container",{duration:0.25, morphSVG: "#record-player"});



$("#burger-container").on("mouseenter", function(){
    console.log("mouse enter");

    if(canYouSeeNav === false){
        // play the timeline to combine the lines into 1 line
        lineToLine.play();
    }

});


// $( document ).ready(function() {
//   console.log( "ready!" );
// });
