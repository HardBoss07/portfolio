import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { rainbow as style } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CodeProps } from "@/types/components/Code";

export default function Code({ children, className }: CodeProps) {
  // Extract language from className (e.g., "language-java" -> "java")
  const language = className?.replace(/language-/, "") || "tsx";

  return (
    <div className="Code_wrapper">
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
