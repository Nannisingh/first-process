// import{gsap}from "gsap";
gsap.registerPlugin(CSSPlugin);


var tl = gsap.timeline({
    repeat:-1
})

tl
.to(".container",{
    width: "100%",
    ease:  Expo.easeInOut,
    stagger:2,
},'n')

.to("#text h1",{
    ease:Expo.easeInOut,
    stagger:2,
    top:0
},'n')
.to("#text h1",{
    delay:2,
    ease:Expo.easeInOut,
    stagger:2,
    top:-100,
},'n')

