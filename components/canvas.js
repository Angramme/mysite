import {useRef, useEffect} from "react"

export default function Canvas({script, style}){
    const can_ref = useRef(null);

    useEffect(()=>{
        const can = can_ref.current;
        return script(can);
    }, [])

    return <canvas ref={can_ref} style={style}/>
}