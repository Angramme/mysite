

export default function lines({canvas, is_phone, safeAddEventListener, darkmode, getwinsize}){
    const render_scale = .8;
    const can = canvas;
    const ctx = can.getContext("2d");
    

    const onresize = ()=>{
        const [wid, hei] = getwinsize ? getwinsize() : 
            [window.innerWidth*render_scale, window.innerHeight*render_scale];
        can.width = wid;
        can.height = hei;

        ctx.lineWidth = 6;
    };
    safeAddEventListener("resize", onresize);
    onresize();

    const SIZE = 100;
    
    let ENDLOOP = false;
    const draw = ()=>{
        ctx.clearRect(0, 0, can.width, can.height);
        let T = Date.now();
        let X = can.width* (.5+.5*Math.sin(T*.00058));
        let Y = can.height* (.5+.5*Math.cos(T*.00069));

        for(let x=0; x<can.width; x += SIZE){
            for(let y=0; y<can.height; y += SIZE){
                ctx.beginPath();
                const u = X-x;
                const v = Y-y;
                const len = Math.sqrt(u*u + v*v);
                const invlen = (SIZE*.4)/len;
                const mix = Math.min(1, len/can.width)*255;
                ctx.strokeStyle = `rgba(${mix}, 0, ${255-mix})`;

                u *= invlen;
                v *= invlen;
                ctx.moveTo(x-u, y-v);
                ctx.lineTo(x+u, y+v);
                ctx.stroke();
            }
        }
        
        if(!ENDLOOP)
            requestAnimationFrame(draw);
    };
    draw();

    return function cleanup(){
        ENDLOOP = true;
    };
}