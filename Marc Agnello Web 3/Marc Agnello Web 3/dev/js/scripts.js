
//@prepros-prepend "burger/burger.js"
//@prepros-prepend "burger/burger-mouseEnter.js"
//@prepros-prepend "burger/burger-mouseLeave.js"
//@prepros-prepend "burger/burger-mouseClick.js"


$( document ).ready(function() {
  console.log( "ready!" );
  gsap.registerPlugin(MorphSVGPlugin);
});
