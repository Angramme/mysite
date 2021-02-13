import { themify } from "../lib/darkify"
import styles_raw from "./layout.module.sass"
import CookieConsent from "react-cookie-consent";

export default function Layout({children, style}) {
    const styles = themify(styles_raw);
    return <div className={styles.layout} style={style} lang="en-GB">
        {children}

        <CookieConsent
            location="bottom"
            buttonText="I agree!"
            cookieName="cookie_consent_agreed"
            style={{fontSize: "13px"}}
            buttonStyle={styles.cookie_consent_btn}
            expires={150}
            >
            This website uses cookies to enhance the user experience (darkmode settings).
        </CookieConsent>
    </div>
}