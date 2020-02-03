
var recordToX = gsap.timeline({paused:true});
recordToX.to("#middle-line", {alpha: 0}, "start")
.to("#left-line", {morphSVG: "#left-to-x", duration:0.25}, "start")
.to("#right-line", {morphSVG: "#right-to-x", duration:0.25}, "start")
.to("#spin-record",{alpha:0}, "start")
.to("#record-circle",{alpha:0}, "start")


$("#burger-container").on("click", burgerClicked);

function burgerClicked(){
  console.log("click");
  // $("nav").addClass("show-nav");

    if(canYouSeeNav === false){
      recordToX.invalidate().restart();
      gsap.to("#nav-bg",{duration:0.15, scale:15, y: 400, x: 70});
      gsap.from("#nav-bg", {transformOrigin: "50 50", rotate: 360, repeat: -1,  ease: Power0.easeNone, duration: 2});
      gsap.set("nav",{display:"flex"});
      gsap.from("nav li",{duration:0.25, alpha:0, stagger: 0.15});
      canYouSeeNav = true;
    }else{
      // recordToX.invalidate().restart();
      recordToX.reverse();
      gsap.to("#nav-bg",{duration:0.5, scale:1, y:-450});
      gsap.to("nav li", {duration:0.25, alpha: 0, onComplete: hideNav, display: "none"});
      canYouSeeNav = false;
    }
}


$("nav li").on("click", function(){
  recordToX.reverse();
  gsap.to("#nav-bg",{duration:0.5, scale:1, y:-450});
  gsap.to("nav li", {duration:0.25, alpha: 0, onComplete: hideNav, display: "none"});
});
