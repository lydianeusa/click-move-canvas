console.log("On est bien dans lotre fichier");
window.addEventListener('load', init)
let stage;
function init() {
    let canvas = document.querySelector ('.myCanvas');
    stage = new createjs.Stage(canvas);

    createCircle(200, 150, 30, "red")
    createCircle(100, 150, 30, "green")
    createCircle(200, 300, 100, "blue")

    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", () => {
        stage.update()
    })

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

return circle;
}