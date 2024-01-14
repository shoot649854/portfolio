import { ReactNode } from 'react';

export interface ICodeSegment {
    code?: string;
    language: string;
    showLineNumbers?: boolean;
    startingLineNumber?: number;
    children?: ReactNode;
}