

var p3b=document.querySelector("#page3 .p3b")
var p3imgs=document.querySelectorAll("#page3 .p3imgs")
var p3img=document.querySelector("#page3 .p3imgs img")
var p1img2=document.querySelector("#p1img2")
var tl=gsap.timeline({
scrollTrigger:{
    trigger:"#page1",
    start:"top 0",
    end:"top -100%",
    scrub:1,
    scroller:"body"
}
})
tl.to("#p1img1",{
    y:-250,
    width:"50%",
},"a")
tl.to("#p1img2",{
scale:1.5,
pin:true,
},"a")
p3imgs.forEach(function(p3imgs){

    
p3imgs.addEventListener("mouseenter",function(){
    var c=p3imgs.childNodes[1].childNodes[5]
    c.style.color="black"
    c.style.backgroundColor="white"
})
p3imgs.addEventListener("mouseleave",function(){
    var c=p3imgs.childNodes[1].childNodes[5]
    c.style.color="white"
    c.style.backgroundColor="transparent"
})
})
var p4h1=document.querySelectorAll("#page4 h1")
p4h1.forEach(function(elem){
    elem.addEventListener("mouseenter",function(dets){
        
        var i=dets.target.id
        var j=2*i-1
        var img=dets.target.parentNode.childNodes
        img[j].style.opacity=1
        elem.style.color="white"
        
    })
    
})
p4h1.forEach(function(elem){
    elem.addEventListener("mouseleave",function(dets){
        
        elem.style.color="#5f5f5f"
        var i=dets.target.id
        console.log(i)
        var j=2*i-1
        var img=dets.target.parentNode.childNodes
        img[j].style.opacity=0

    })
    
})
var tl = gsap.timeline({
    scrollTrigger:{
    scroller:'body',
    trigger:'#page5upper',
    start:'top top',
    scrub:1,
    pin:true,
    // markers:true
    }
})
// tl.to("#bx0",{
//     top:0
// })
tl.to('#bx3',{
    top: "10%",
})
tl.to('#bx2',{
    top: "20%"
})
tl.to('#bx1',{
    top: "30%"
},"a")
tl.to('#page6',{
    top: "670%"
},"a")
// var nav = document.querySelector('#page6 #p6lower #navline')
gsap.to("#page6 #p6lower #navline",{
    transform:"translate(-30%)",
    duration:3,
    ease: "none",
    repeat: -1, 
    repeatDelay: 0
})