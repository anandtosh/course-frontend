import React, { useEffect, useRef, useState } from 'react';
import Highlight from 'react-highlight';
// import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import 'highlight.js/styles/ir-black.css'
import './css/html_render.scss'

const RenderDynamicHTML = ({ html }) => {

  const containerRef = useRef(null);
  const codeRef = useRef(null)
  const [prefixed,setPrefixed] = useState(false)

  const prefixElement = () => {
    const preBlocks = containerRef.current.getElementsByTagName('pre');
    for (let i = 0; i < preBlocks.length; i++) {
      const preBlock = preBlocks[i];
      let codeClassName;
      const codeElement = preBlock.querySelector('code');
      if (codeElement) {
        codeClassName = codeElement.className;
      }
      if (preBlock.previousElementSibling?.classList.contains('copy-widget-code')) {
        continue; // Skip to the next iteration if a wrapper is already inserted
      }
      // Create the wrapper element
      const wrapper = document.createElement('div');
      wrapper.className = 'flex items-center justify-between py-2 px-4 bg-gray-800 text-sm rounded-t rounded-t-lg copy-widget-code'

      // Create the "Code Block" text element
      const codeText = document.createElement('span');
      const regex = /(?<=language-)(\w+)/;
      let matches
      let languageName
      if(codeClassName){
        matches = codeClassName.match(regex);
        languageName = matches ? matches[0] : 'Unknown';
      }
      codeText.textContent = languageName;
      codeText.className = ' text-gray-100 text-sm'

      // Create the "Copy" button element
      const copyButton = document.createElement('button');
      // copyButton.textContent = '';
      copyButton.className = 'flex ml-auto gap-2 items-center text-gray-200'
      copyButton.innerHTML = `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg><span>Copy code</span>`;
      // Add event listener to copy the code
      copyButton.addEventListener('click', () => {
        const code = preBlock.querySelector('code').textContent;
        navigator.clipboard.writeText(code).then(() => {
          copyButton.textContent = 'Copied!';
          setTimeout(() => {
            copyButton.innerHTML = `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg><span>Copy code</span>`;
          }, 2000);
        });
      });

      // Append elements to the wrapper
      wrapper.appendChild(codeText);
      wrapper.appendChild(copyButton);

      // Insert the wrapper before the <pre> block
      preBlock.parentNode.insertBefore(wrapper, preBlock);
    }
    let listBlocks = []
    listBlocks.push(...containerRef.current.getElementsByTagName('ol'))
    listBlocks.push(...containerRef.current.getElementsByTagName('ul'))
    for (let i = 0; i < listBlocks.length; i++) {
      const listBlock = listBlocks[i];
      listBlock.className = (listBlock.tagName == 'ol' || listBlock.tagName == 'OL') ? 'list-decimal list-inside' : 'list-disc list-inside'
      
    }
  }

  useEffect(() => {
    prefixElement()
  }, [html])

  return (
    <div className='cpbox ' ref={containerRef}>
      <Highlight
        wrapLines={true}
        innerHTML={true}
        ref={codeRef}
      >
        {html}
      </Highlight>
    </div>
  )
};

export default RenderDynamicHTML;