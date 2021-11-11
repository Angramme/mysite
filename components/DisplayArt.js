import { clientside_check } from "../lib/is_mobile";
import { useDarkMode } from "next-dark-mode";
import styles_raw from '../styles/display_art.module.sass';
import {themify} from "../lib/darkify";

import Canvas from "./canvas";
import { AiFillCaretDown } from 'react-icons/ai'

import dancing_shapes from "../lib/animated_backgrounds/dancing_shapes";
import dots from "../lib/animated_backgrounds/dots";

const ART = [
    [dancing_shapes, "dancing shapes"],
    //[dots, "dots"],
]

export default function DisplayArt(){
    const styles = themify(styles_raw);
    const darkmode = useDarkMode().darkModeActive;
    const artpiece = ART[Math.random() * ART.length |0];
    return <div className={styles.parent}>
        <Canvas
            script={runArt}
            className={styles.canvas}
            args={{darkmode, func: artpiece[0]}}
        />
        <h2 className={styles.header}> 
            <AiFillCaretDown style={{verticalAlign:"middle"}}/>
            scroll down
            <AiFillCaretDown style={{verticalAlign:"middle"}}/>
        </h2>
        {/* <span>{artpiece[1]}</span> */}
    </div>
}

function runArt(CAN, {darkmode, func}){
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

    const is_phone = clientside_check();

    const cleanup_fonc = is_phone ? ()=>{} : func({
        canvas: CAN,
        is_phone,
        safeAddEventListener,
        darkmode,
        getwinsize: ()=>{
            const ratio = 1/2;
            return [
                CAN.width = CAN.offsetWidth |0,
                CAN.height = CAN.offsetHeight |0,
            ];
        }
    });

    let Q = 1;

    if(!is_phone){
        safeAddEventListener("scroll", ()=>{
            Q = Math.min(1., window.scrollY/window.innerHeight*2.0);
            CAN.style.opacity = `${(1. - Q)}`;
        });
    }

    return function cleanup(){
        // LOOP = false;
        cleanup_fonc();
        cleanupEventListeners();
    };
}