import SimplexNoise from 'simplex-noise';

const noise_scale = .001;

function pattern(ctx, noise, x, y, s, n, T){
    const cut1 = -.05;
    const cut2 = .3*(1-window.scrollY*.005);
    const nis = noise(x*noise_scale, y*noise_scale, T);

    if(nis > cut2) return;
    if(n > 0 && nis > cut1){
        const hs = s*.5;
        ctx.strokeRect(x, y, s, s);
        pattern(ctx, noise, x, y, hs, n-1, T+27);
        pattern(ctx, noise, x+hs, y, hs, n-1, T+27);
        pattern(ctx, noise, x, y+hs, hs, n-1, T+27);
        pattern(ctx, noise, x+hs, y+hs, hs, n-1, T+27);
    }else{
        const ls = s*.3;
        ctx.fillRect(x+ls, y+ls, s-2*ls, s-2*ls);
    }
}

export default function grids({canvas, is_phone, safeAddEventListener, darkmode, getwinsize}){
    const render_scale = .8;
    const can = canvas;
    const ctx = can.getContext("2d");
    const simp = new SimplexNoise();
    
    const onresize = ()=>{
        const [wid, hei] = getwinsize ? getwinsize() : 
            [window.innerWidth*render_scale, window.innerHeight*render_scale];
        can.width = wid;
        can.height = hei;
    };
    safeAddEventListener("resize", onresize);
    onresize();

    const SIZE = 120;
    
    let ENDLOOP = false;
    const draw = ()=>{
        ctx.clearRect(0, 0, can.width, can.height);
        ctx.lineWidth = 2;
        ctx.strokeStyle = darkmode ? "white" : "black";
        ctx.fillStyle = darkmode ? "white" : "black";

        const T = Date.now()*.00005;

        const padX = (can.width%SIZE)*.5;
        const padY = (can.height%SIZE)*.5;

        for(let x=.5*SIZE+padX; x<can.width-.5*SIZE; x += SIZE){
            for(let y=.5*SIZE+padY; y<can.height-.5*SIZE; y += SIZE){
                pattern(ctx, simp.noise3D.bind(simp), x-SIZE*.5, y-SIZE*.5, SIZE, 3, T);
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