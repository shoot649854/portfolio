import { CodeBlock as SyntaxHighlighter, dracula } from 'react-code-blocks';

import { ICodeSegment } from '../Types';

const CodeSegment = (props: ICodeSegment) => {
  const { language, showLineNumbers, startingLineNumber, children, ...rest} = props;
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