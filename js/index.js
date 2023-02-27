console.log("On est bien dans lotre fichier");
window.addEventListener('load', init)
let stage;
let circles = [];

function init() {
    let canvas = document.querySelector ('.myCanvas');
    stage = new createjs.Stage(canvas);
   
    let c1, c2, c3;

    c1 = createCircle(200, 150, 30, "red")
    c2 = createCircle(100, 150, 30, "green")
    c3 = createCircle(200, 300, 100, "blue")

    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", () => {
        animate();
        stage.update()
    })
    }

    function animate () {
      for(let index = 0; index < circles.length; index +=1) {
        circles[index].y += 1
      }
    }

function createCircle (myX, myY, myRadius, myColor) {
let circle = new createjs.Shape();
circle.graphics.beginFill(myColor).drawCircle(0, 0, myRadius);
circle.x = myX;
circle.y = myY;
circle.myName = 'cercle de couleur ' + myColor;
stage.addChild(circle);

circle.addEventListener('click', (event) => {
    console.log(event.currentTarget.myName);
})

circles.push(circle)

return circle;
}