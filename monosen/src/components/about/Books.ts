export interface Book {
  title: string;
  author: string;
  img: string;
}

export const books: Book[] = [
  {
    title: "The Clean Coder",
    author: "Robert C. Martin",
    img: "BookCleanCoder.png",
  },
  {
    title: "Working Effectively With Legacy Code",
    author: "Michael C. Feathers",
    img: "BookworkingEffectivelyWithLegacyCode.png",
  },
  {
    title: "Search Inside Yourself",
    author: "Chade-Meng Tan",
    img: "BookSearchInsideYourself.png",
  },
];
