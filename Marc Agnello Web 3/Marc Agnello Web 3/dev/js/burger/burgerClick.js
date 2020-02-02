var recordToX = gsap.timeline({paused:true});
recordToX.to("#middle-line", {alpha: 0}, "start")
.to("#left-line", {morphSVG: "#left-to-x", duration:0.25}, "start")
.to("#right-line", {morphSVG: "#right-to-x", duration:0.25}, "start")
.to("#spin-record",{alpha:0}, "start")
.to("#record-circle",{alpha:0}, "start")

$("#burger-container").on("click", burgerClicked);

function burgerClicked(){
  console.log("click");
  $("nav").addClass("show-nav");

    if(canYouSeeNav === false){
      recordToX.invalidate().restart();
      canYouSeeNav = true;
    }else{
      recordToX.invalidate().restart();
      recordToX.play();
      canYouSeeNav = false;
    }
}
