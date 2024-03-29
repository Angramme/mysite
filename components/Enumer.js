
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import gfm from 'remark-gfm'

import { AiOutlineArrowRight as Arrow } from 'react-icons/ai/index'

import styles_raw from '../styles/enumer.module.sass'
import { themify } from '../lib/darkify';
import { useState } from 'react';

export default function Enumer({ className, style, data }){
    const styles = themify(styles_raw);
    const _overflow = 95;
    return <table className={styles.enumer}>
        {data.map(({project, company, company_full, company_url, role, role_desc, desc, dates, img_url})=>{
            const fdesc = 
                (desc || "")
                + (role_desc && ("\n\nRole: " + role_desc) || "");
            const pdesc = fdesc.substring(0, _overflow) + "...";
            const [s, setS] = useState(false);
            const smoref = fdesc.length > _overflow;
            return <tr key={"enumer"+project+company+role+dates}>
                <th><img src={img_url} className={styles.logo}/></th>
                <td>
                    <a>
                        {dates} | {role && <><u>{role}</u> :</>} {company_full} (
                    </a>
                    <a href={company_url} target="_blank" className={company_url ? styles.has_url : ""}>{company}</a>
                    <a> 
                        ) {project && <><br/> - {project}</>}
                    </a>
                    <ReactMarkdown 
                        className={styles.md}
                        children={
                            s || !smoref ? fdesc : pdesc
                        }
                        // components={md_renderers(styles)}
                        plugins={[gfm]}
                        ></ReactMarkdown>
                    {smoref && <><Arrow className={styles.reicon}/> <a
                        className={styles.seemore} 
                        onClick={()=>setS(!s)}>{s ? "See less" : "See more"}</a></>}
                </td>
            </tr>
        }
        )}
    </table>
}