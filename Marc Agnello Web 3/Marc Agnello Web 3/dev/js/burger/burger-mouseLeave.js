

$("#burger-container").on("mouseleave", function(){
    console.log("mouse leave");

    if(canYouSeeNav === false){
        // play the timeline to combine the lines into 1 line
        lineToLine.reverse();
        rotate.play();
    }else{
      lineToLine.pause();
      rotate.pause();
      // recordToX.play();
    }

});
