import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import MarkdownViewer from '../../../components/common/MarkdownViewer';
import { useQuizStore } from '../../../stores';

const CodeBlock = ({ code }) => {
    return <pre className="whitespace-pre-wrap"><code>{code}</code></pre>;
};


const Question = (props) => {
    const {question,cqIndex} = useQuizStore()
    return (
        <div className='text-lg  '>
            <p className='font-semibold'>Question No. {cqIndex+1} - {question?.question_type}</p>
            <MarkdownViewer content={question?.question_text} prose={true}/>
        </div>
    )
}

export default Question