import {useRef, useEffect} from "react"

export default function Canvas({script, style={}, args, className=''}){
    const can_ref = useRef(null);

    useEffect(()=>{
        const can = can_ref.current;
        return script(can, args);
    }, [script, args])

    return <canvas ref={can_ref} style={style} className={className}/>
}