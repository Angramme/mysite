import { useDarkMode } from "next-dark-mode"
import { themify } from "../lib/darkify"
import styles_raw from "./darkmode_button.module.sass"
import {CgDarkMode, CgSun, CgMoon} from "react-icons/cg"
import ReactTooltip from "react-tooltip"

export default function DarkmodeButton({className}){
    const styles = themify(styles_raw);
    let dm = useDarkMode();

    return <div className={className+" "+styles.btn} onClick={()=>{
        if(dm.autoModeActive)
            dm.switchToDarkMode();
        else if(dm.darkModeActive)
            dm.switchToLightMode();
        else
            dm.switchToAutoMode();
        setTimeout(ReactTooltip.rebuild, 200);
        //document.location.reload(true);
    }}>
        {(()=>{
            if(dm.autoModeActive) return <CgDarkMode data-tip="system"/>
            if(dm.darkModeActive) return <CgMoon data-tip="dark mode"/>
            if(!dm.darkModeActive) return <CgSun data-tip="light mode"/>
        })()}
        <ReactTooltip 
            place="left"
            backgroundColor="gray"
            color="white"
            borderColor="white"/>
    </div>
}