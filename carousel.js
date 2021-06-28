/*@keyframes fadeOut {
    from {opacity: 1}
    to {opacity: 0}
}*/

// SETTINGS
const duration = 1000
const delay = 1000

// JS Keyframes
const fadeOut = [
    {opacity: 1},
    {opacity: 0}
]


class Slide {
    constructor (url) {
        this.url = url
    }

    render (rootSelector)  {
   
    let parentDiv = document.querySelector(rootSelector)
    this.slideElement = document.createElement('div')
    this.slideElement.className="slide"

 

for(let y = 1; y <= 24; y++){
    for(let x = 1; x <= 32; x++){
let sq = document.createElement('div')
        sq.className="sq"
        sq.style.top = `${(y-1)*25}px`
        sq.style.left = `${(x-1)*25}px`
         
        sq.style.backgroundImage = `url(${this.url})`
        sq.style.backgroundPositionY = `${-(y-1)*25}px`
        sq.style.backgroundPositionX = `${-(x-1)*25}px`

        this.slideElement.appendChild(sq)
    }
}
     if(parentDiv.firstElementChild)
    parentDiv.removeChild(parentDiv.firstElementChild)
 
 parentDiv.appendChild( this.slideElement)      
}
    addEffect() {
       for(let i = 0; i < this.slideElement.children.length; i++){
          // this.slideElement.children[i].style.animation 
          // = `fadeOut 1s linear ${Math.random()}s forwards`

          let animationParams = {
              duration: duration,
              delay: Math.random() * delay,
              easing: 'linear',
              fil: 'forwards'

          }
         this.slideElement.children[i].animate(fadeOut, animationParams)

        }
    }
}

class Carousel {
    constructor(rootSelector, slides){
        this.rootSelector = rootSelector
        this.slides = slides
    }

    render(slideIndex) {
         this.slides[slideIndex].render(this.rootSelector)
         // TEST
       /*  colorjs.prominent(
            this.slides[slideIndex].url, 
            { amount: 3 }
            ).then(color => {
                document.querySelector("#titleBar h1").style.color = 
                `rgb(${color[0][0]},${color[0][1]}, ${color[0][2]} )`
            //console.log(color) // [241, 221, 63]
          })
colorjs.average(
    this.slides[slideIndex].url, 
    ).then(color => {
        document.querySelector(".carousel").style.backgroundColor = 
        `rgb(${color[0]},${color[1]}, ${color[2]} )`
    
  })*/
    }

    next() {
        this.slides.push(this.slides.shift())
        this.render(0)
        this.slides[0].addEffect()
    }
}

//////////////////////////
const carousel = new Carousel('.carousel', [
    new Slide("images/203-800x600.jpg"),
    new Slide("images/576-800x600.jpg"),
    new Slide("images/1018-800x600.jpg"),
])

carousel.next()





