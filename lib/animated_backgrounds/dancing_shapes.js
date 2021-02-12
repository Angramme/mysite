

class Dancer{
    constructor(draw){
        this.seed = Math.random();
        this.scale = (Math.random()+1);
        this._draw = draw;
    }
    draw(can, ctx, t){
        t *= .0001;
        const x = can.width* (.5+.5*Math.sin(t*1.7 + Math.sin(t*this.seed)+this.seed*23.));
        const y = can.height* (.5+.5*Math.sin(t*3.3 + Math.sin(t*this.seed*.8)+this.seed*13.));
        this._draw(ctx, x, y, this.scale*can.width/1080, (t%(2*Math.PI))*40*(.5-this.seed) + this.seed*.8);
    }
}

function circle(color){
    return (ctx, x, y, scale, rot)=>{
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, scale*20, 0, 2 * Math.PI);
        ctx.stroke();
    };
}
function rectangle(color){
    return (ctx, x, y, scale, rot)=>{
        ctx.save();
        ctx.strokeStyle = color;
        ctx.translate(x, y);
        ctx.rotate(rot);
        ctx.beginPath();            
        ctx.rect(-10*scale, -10*scale, 20*scale, 20*scale);
        ctx.stroke();
        ctx.restore();
    };
}


function anyof(arr){
    return arr[Math.random()*arr.length|0];
}
function randcolor(){
    return anyof([
        "red", "blue", "yellow"
    ]);
}

export default function dancing_shapes({canvas, is_phone, safeAddEventListener, darkmode}){
    const render_scale = .8;
    const can = canvas;
    const ctx = can.getContext("2d");
    const can2 = document.createElement("canvas");
    const ctx2 = can2.getContext("2d");

    const onresize = ()=>{
        can.width = window.innerWidth*render_scale;
        can.height = window.innerHeight*render_scale;
        can2.width = window.innerWidth*render_scale;
        can2.height = window.innerHeight*render_scale;
        
        ctx.lineWidth = darkmode ? 1.2 : 1.4;
    };
    safeAddEventListener("resize", onresize);
    onresize();

    let dancers = [];
    let N = Math.min(can.width*can.height*(darkmode ? .00001 : .000015)/render_scale |0, 20);
    for(let i=0; i<N; i++){
        dancers.push(new Dancer(anyof([
            circle(randcolor()),
            rectangle(randcolor())
        ])));
    }

    let ENDLOOP = false;
    let trace_cnt = 0;
    const draw = ()=>{
        if(trace_cnt > 3){
            ctx2.clearRect(0,0, can.width, can.height);
            ctx2.globalAlpha = .9;
            ctx2.drawImage(can,0,0);
            ctx.clearRect(0,0, can.width, can.height);
            ctx.drawImage(can2,0,0);
            trace_cnt = 0;
        } else{
            ctx.clearRect(0, 0, can.width, can.height);
            ctx.drawImage(can2,0,0);
        }
        trace_cnt++;

        let time = Date.now();

        for(let d of dancers){
            d.draw(can, ctx, time);
        }

        if(!ENDLOOP)
            requestAnimationFrame(draw);
    };
    draw();

    return function cleanup(){
        ENDLOOP = true;
    };
}