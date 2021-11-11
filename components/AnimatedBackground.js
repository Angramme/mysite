import Canvas from "../components/canvas"

import {clientside_check as is_mobile} from "../lib/is_mobile"

import dots from "../lib/animated_backgrounds/dots.js"
// import dancing_shapes from "../lib/animated_backgrounds/dancing_shapes.js"
import { useDarkMode } from "next-dark-mode"

export default function AnimBackground(){
    const darkmode = useDarkMode().darkModeActive;
    return <div style={{
        position:"fixed",
        top:0,
        bottom:0,
        left:0,
        right:0,
        width:"100vw",
        height:"100vh",
        background: darkmode ?
            "linear-gradient(90deg, rgb(24, 24, 26), rgb(43, 47, 53))" : 
            "linear-gradient(90deg, rgb(205 205 205), rgb(218 219 226))",
    }}></div>
    // return <Canvas args={{darkmode, func:dots}} script={hook} style={
    //     {
    //         position:"fixed",
    //         top:0,
    //         bottom:0,
    //         left:0,
    //         right:0,
    //         width:"100vw",
    //         height:"100vh",
    //         zIndex: 1,
    //         background: darkmode ?
    //             "linear-gradient(90deg, rgb(24, 24, 26), rgb(43, 47, 53))" : 
    //             "linear-gradient(90deg, rgb(205 205 205), rgb(218 219 226))",
    //     }
    // }></Canvas>
}

function hook(can, {darkmode, func}){
    const is_phone = is_mobile();

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

    let func_cleanup = func({
        canvas: can,
        safeAddEventListener,
        darkmode,
        is_phone,
    });

    return function cleanup(){
        func_cleanup();
        cleanupEventListeners();
    }
}
