import '../styles/globals.sass'
import withDarkMode from 'next-dark-mode'

import ReactTooltip from "react-tooltip"
import react from 'react'

function MyApp({ Component, pageProps }) {

  // Tooltip stuff...
  const [isTooltipVisible, setTooltipVisibility] = react.useState(false);
  react.useEffect(() => {
    setTooltipVisibility(true);
  }, []);

  return <div>
      <Component {...pageProps} />
      {isTooltipVisible && <ReactTooltip 
        effect="solid"
        place="left"
        backgroundColor="gray"
        color="white"
        borderColor="white"/>}
    </div>
}

export default withDarkMode(MyApp)
