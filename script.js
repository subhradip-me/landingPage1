function page1Animation(){
    
    let tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
    y:-30,
    opacity:0,
    delay:.5,
    stagger:.1
})
tl.from(".center-part1 h1, .center-part1 p",{
    x:-300,
    opacity:0,
})
tl.from(".center-part1 button",{
    opacity:0,
    delay:.2
})
tl.from(".center-part2 img",{
    x:300,
    opacity:0,
    stagger:.2
},"-=1")
tl.from(".page1-bottom img",{
    y:30,
    delay:.2,
    opacity:0,
    stagger:.15
})

}

page1Animation();

function page2Animation(){
    let tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".page2",
            scroller:"body",
            start:"top 50%",
            end:"top 0",
            scrub:2
        }
    })
    tl2.from(".services",{
        y:30,
        opacity:0,
    })
    tl2.from(".card1",{
        x:-300,
        opacity:0,
        duration:.5
    },"cardRow1")
    tl2.from(".card2",{
        x:300,
        opacity:0,
        duration:.5
    },"cardRow1")
    tl2.from(".card3",{
        x:-300,
        opacity:0,
        duration:.5
    },"cardRow2")
    tl2.from(".card4",{
        x:300,
        opacity:0,
        duration:.5
    },"cardRow2")
}

page2Animation();