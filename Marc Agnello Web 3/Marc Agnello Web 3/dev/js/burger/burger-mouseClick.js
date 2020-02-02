var rotate = gsap.timeline({paused:true});

rotate.to("#spin-record",{transformOrigin: "14 4", rotate: 360, repeat: -1, ease: Power0.easeNone})
$("#burger-container").on("click", function(){
    console.log("mouse click");

    if(canYouSeeNav === false){
        // play the timeline to combine the lines into 1 line
        rotate.play();
        gsap.to("#nav-bg",{duration:0.5, scale:15, y: 400, x: 70});
        canYouSeeNav = true;
    }else{
      gsap.to("#nav-bg",{duration:0.5, scale:1, y:-450});
      canYouSeeNav = false;
    }

});
