import React from 'react';

export const CodeBlock: React.FC<{ children?: React.ReactNode }> = (props) => {
  return (
    <pre className="border-solid border-1 rounded p-2" style={{ wordBreak: 'break-all', whiteSpace: 'pre-wrap' }}>
      {props.children}
    </pre >
  );
}
