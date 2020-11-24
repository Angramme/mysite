import Canvas from "../components/canvas"


export default function AnimBackground(){
    return <Canvas script={doStuff} style={
        {
            position:"fixed",
            top:0,
            bottom:0,
            left:0,
            right:0,
            width:"100vw",
            height:"100vh",
        }
    }></Canvas>
}

function doStuff(can){
    const C = can.getContext('2d');

    const resize = ()=>{
        can.width = window.innerWidth;
        can.height = window.innerHeight;
    };

    const redraw = ()=>{
        C.clearRect(0, 0, can.width, can.height);
        C.fillStyle = "white";
        for(let i=0; i<500; i++){
            let x = Math.random()*can.width;
            let y = Math.random()*can.height;
            C.fillRect(x, y, 0.5, 2);
        }
        for(let i=0; i<5; i++){
            C.beginPath();
            C.moveTo(0, can.height*(0.65+Math.pow(i, 1.5)*0.11));
            C.lineTo(can.width*(0.8+i*0.02), 0);
            C.lineWidth = 2;
            C.strokeStyle = "#6600dd";
            C.closePath();
            C.stroke();
        }
    };

    const update = ()=>{
        resize();
        redraw();
    }
    window.addEventListener("resize", update);
    update();
}