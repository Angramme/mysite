import Canvas from "../components/canvas"

import {clientside_check as is_mobile} from "../lib/is_mobile"

import lava from "../lib/animated_backgrounds/lava.js"

export default function AnimBackground(){
    return <Canvas script={hook} style={
        {
            position:"fixed",
            top:0,
            bottom:0,
            left:0,
            right:0,
            width:"100vw",
            height:"100vh",
            zIndex: 1,
        }
    }></Canvas>
}

function hook(can){
    const isPhone = is_mobile();

    const bCan = document.createElement("canvas");
    const bC = bCan.getContext('2d');
    const C = can.getContext('2d');

    let eventListenerCleanup = [];
    const safeAddEventListener = (t, cb, opt)=>{
        eventListenerCleanup.push({t, cb, opt});
        window.addEventListener(t, cb, opt);
    };
    const cleanupEventListeners = ()=>{
        for(let {t, cb, opt} of eventListenerCleanup){
            window.removeEventListener(t, cb, opt);
        }
    };

    const resize = ()=>{
        bCan.width = window.innerWidth;
        bCan.height = window.innerHeight;
        can.width = window.innerWidth;
        can.height = window.innerHeight;
    };

    const redraw_background = ()=>{
        bC.clearRect(0, 0, bCan.width, bCan.height);
        for(let i=0; i<200; i++){
            bC.fillStyle = ["yellow", "red", "blue", "white"][Math.random()*4|0];
            let x = Math.random()*bCan.width|0;
            let y = Math.random()*bCan.height|0;
            bC.fillRect(x, y, .8, 2+Math.random()*1.5);
        }
    }

    let y = 0;
    const redraw = (dt)=>{
        y += 0.02*dt;
        if(y<0) y += can.height;
        y %= can.height;
        C.clearRect(0, 0, bCan.width, bCan.height);
        C.drawImage(bCan, 0, y|0);
        C.drawImage(bCan, 0, (y-can.height)|0);
        if(!dt) dt = 0
    };

    if(!isPhone){
        let lScrollY = window.scrollY;
        safeAddEventListener("scroll", ()=>{
            fps_limit = 60
            let dScrollY = lScrollY - window.scrollY;
            lScrollY = window.scrollY;
            y += dScrollY*0.07;
        })
    }


    const update = ()=>{
        resize(); 
        redraw_background();
        redraw(0);
    }
    safeAddEventListener("resize", update);
    update();

    let fps_limit = 20;
    let last = Date.now();
    let ENDLOOP = false;
    const loop = ()=>{
        let nw = Date.now();
        let dt = nw-last;

        if(dt >= 1000/fps_limit){
            redraw(dt);
            last = nw;
            fps_limit = 20;
        }
        if(!ENDLOOP)
            requestAnimationFrame(loop);
    }
    loop();

    return function cleanup(){
        ENDLOOP = true;
        cleanupEventListeners();
    }
}
