import clsx from 'clsx'
import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkBreaks from 'remark-breaks'
import remarkRehype from 'remark-rehype/lib'

const MarkdownViewer = ({ content, prose = false, ...props }) => {
    return (
        <div className={clsx(prose ? 'prose' : '')}>
            <ReactMarkdown
                remarkPlugins={[remarkBreaks,remarkRehype]}
                rehypePlugins={[rehypeRaw]}
                className='dark:text-white'
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}

export default MarkdownViewer