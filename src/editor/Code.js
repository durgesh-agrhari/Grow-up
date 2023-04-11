import { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { ThemeContext } from '../App';
import { CopyIcon, PastIcon } from './assets12/icons';

const Code = ({children,language}) => {

    const [copied, setCopied] = useState(false)

    // const {isDark} = useContext(ThemeContext);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [copied])

  return (
    <div className='code'>
        {/* <h1>Hello</h1> */}
        <CopyToClipboard text={children} onCopy={() => setCopied(true) }>
            <button className='icon copy-icon'>
                { copied ? <PastIcon/> : <CopyIcon/>} 
            </button>
        </CopyToClipboard>

        <SyntaxHighlighter language={language} style={materialDark}>
            {children}
        </SyntaxHighlighter>      
    </div>
  )
}

export default Code
