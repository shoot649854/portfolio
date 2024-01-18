// *.jpg
declare module '*.jpg';

declare module '*.png';

// *.mp4
declare module '*.mp4' {
  const src: string;
  export default src;
}