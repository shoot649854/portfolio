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
  tags?: string[];
  imageSrcPath?: string;
  children?: ReactNode;
}

export interface IVideoSegment {
  source: string;
  type: string;
}

export interface MainFeaturedPostProps {
  title: string;
  description: string;
  image: string;
  imageText?: string;
  linkText?: string;
  LinkToPage: string;
  date: string;
}

export interface FeaturedPostProps {
  title: string;
  description: string;
  date: string;
  image: string;
  imageText?: string;
  LinkToPage: string;
}

export interface ArticleSection {
  type: string;
  variant?: string; 
  content?: string;
  url?: string;
  description?: string;
}

export interface Article {
  projectTitle: string;
  editedDate: string;
  tags: string[];
  article: ArticleSection[];
}