var lineToLine = gsap.timeline({paused:true});
// lineToLine.to("#top-line",{duration:0.25, x:5},"move-lines")
// .to("#bottom-line",{duration:0.25, y:-5},"move-lines")
// .to("#middle-line", {alpha:0});


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
