import { ReactNode } from 'react';

export interface ICodeSegment {
    code?: string;
    language: string;
    showLineNumbers?: boolean;
    startingLineNumber?: number;
    children?: ReactNode;
}

export interface IProjectHeader {
  projectTitle: string;
  editedDate: string;
  imageSrcPath?: string;
  children?: ReactNode;
}