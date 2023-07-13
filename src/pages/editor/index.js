import React, { useEffect, useRef } from 'react';

import Editor from '@monaco-editor/react';

const MonacoEditor = ({onChange = () => {}}) => {
    return (
        <Editor 
            height="100vh" 
            theme={'vs-dark'}
            // defaultLanguage="javascript" 
            defaultValue={`let isDone: boolean = false; let age: number = 25; let message: string = "Hello, TypeScript!"; let data: null = null; let value: undefined = undefined; let id: symbol = Symbol("unique identifier");`}
            onChange={onChange} 
        />
    );
};

export default MonacoEditor;
