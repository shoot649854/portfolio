import { CodeBlock as SyntaxHighlighter, dracula } from 'react-code-blocks';

import { ICodeSegment } from '../Types';

const CodeSegment = (props: ICodeSegment) => {
  const { language, showLineNumbers, startingLineNumber, children, ...rest } = props;
  const codeLines = typeof children === 'string' ? children.split('\n') : [];

  return (
    <>
      <SyntaxHighlighter
        language={language}
        showLineNumbers={showLineNumbers}
        startingLineNumber={startingLineNumber}
        theme={dracula}
        text={codeLines.join('\n')}
        {...rest}
      />
    </>
  );
};

export default CodeSegment;