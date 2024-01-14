import { CodeBlock as SyntaxHighlighter, dracula } from 'react-code-blocks';
import { Box } from '@mui/material';

import { ICodeSegment } from '../Types';

const CodeSegment = (props: ICodeSegment) => {
  const { language, showLineNumbers, startingLineNumber, children, ...rest } = props;
  const codeLines = typeof children === 'string' ? children.split('\n') : [];

  return (
    <>
    <Box marginBottom={5}>
      <SyntaxHighlighter
        language={language}
        showLineNumbers={showLineNumbers}
        startingLineNumber={startingLineNumber}
        theme={dracula}
        text={codeLines.join('\n')}
        {...rest}
      />
    </Box>
    </>
  );
};

export default CodeSegment;