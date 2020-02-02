var canYouSeeNav = false;


// gsap.set("#record-player", {alpha:0});
gsap.set("#record-circle-small, #record-dot, #record-line, #record-circle, #close-x",{alpha:0});
gsap.set("#nav-bg",{transformOrigin:"50% 50%"});
gsap.set("nav", {display: "none"});

function hideNav(){
  gsap.set("nav", {display: "none"});
  gsap.set("nav li", {alpha: 1});
}


$( document ).ready(function() {
  console.log( "ready!" );
});
