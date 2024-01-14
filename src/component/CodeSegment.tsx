import { CodeBlock as SyntaxHighlighter, dracula } from 'react-code-blocks';

import { ICodeSegment } from '../Types';

const CodeSegment: React.FC<ICodeSegment> = ({
    language,
    showLineNumbers = false,
    startingLineNumber = 1,
    children,
    ...rest
  }) => {
    return (
      <>
        <SyntaxHighlighter
          language={language}
          showLineNumbers={showLineNumbers}
          startingLineNumber={startingLineNumber}
          theme={dracula}
          text={typeof children === 'string' ? children : undefined}
          {...rest}
        />
      </>
    );
};

export default CodeSegment;