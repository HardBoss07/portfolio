import SyntaxHighlighter from 'react-syntax-highlighter';
import { obsidian } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeProps {
    children: string;
    language?: string;
}

export default function Code({
                                 children,
                                 language = 'tsx',
                             }: CodeProps) {
    return (
        <div className="my-4 rounded-lg overflow-hidden border border-gray-700">
            <SyntaxHighlighter
                language={language}
                style={obsidian}
                showLineNumbers={true}
                customStyle={{
                    margin: 0,
                    padding: '1rem',
                    fontSize: '1rem',
                }}
            >
                {children.trim()}
            </SyntaxHighlighter>
        </div>
    );
}
