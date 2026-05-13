"use client";

import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/esm/languages/hljs/typescript";
import java from "react-syntax-highlighter/dist/esm/languages/hljs/java";
import rust from "react-syntax-highlighter/dist/esm/languages/hljs/rust";
import cpp from "react-syntax-highlighter/dist/esm/languages/hljs/cpp";
import css from "react-syntax-highlighter/dist/esm/languages/hljs/css";
import x86asm from "react-syntax-highlighter/dist/esm/languages/hljs/x86asm";
import { rainbow as style } from "react-syntax-highlighter/dist/esm/styles/hljs";

// Register necessary languages
SyntaxHighlighter.registerLanguage("typescript", tsx);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("java", java);
SyntaxHighlighter.registerLanguage("rust", rust);
SyntaxHighlighter.registerLanguage("cpp", cpp);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("x86asm", x86asm);

interface CodeProps {
  children: string;
  className?: string;
}

export default function Code({ children, className }: CodeProps) {
  // Extract language from className (e.g., "language-java" -> "java")
  const language = className?.replace(/language-/, "") || "tsx";

  return (
    <div className="code-wrapper my-4 overflow-hidden border rounded-lg border-gray-500">
      <SyntaxHighlighter
        language={language}
        style={style}
        showLineNumbers={true}
        customStyle={{
          margin: 0,
          background: "#1E1F22",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          overflowX: "auto",
        }}
      >
        {children.trim()}
      </SyntaxHighlighter>
    </div>
  );
}
