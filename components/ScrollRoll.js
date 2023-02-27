import { useEffect, useRef } from "react"


export default function ScrollRoll({children, begin, end, scroll_end}){
    let ref_c = useRef(null);
    useEffect(()=>{
        const onscroll = ()=>{
            if(!ref_c.current) return;
            let X = Math.min(Math.max(
                (window.scrollY - ref_c.current.offsetTop)/window.innerHeight/scroll_end*100, 
                0), 1);
            ref_c.current.style.transform = `translate(${X*(end[0]-begin[0])+begin[0]}px, ${X*(end[1]-begin[1])+begin[1]}px)`;
        };
        window.addEventListener("scroll", onscroll);

        return function cleanup(){
            window.removeEventListener("scroll", onscroll);
        };
    }, [begin, end, scroll_end]);

    return <div ref={ref_c} style={{position: 'relative'}}>
        {children}
    </div>
}