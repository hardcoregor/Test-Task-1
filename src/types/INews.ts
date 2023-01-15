// export interface News {
//   author: string;
//     content: string;
//     description: string;
//     publishedAt: string;
//     source: {
//       id: null;
//       name: string;
//     };
//     title: string;
//     url: string;
//     urlToImage: string;
// }

// export interface INews {
//   articles: {
//     author: string;
//     content: string;
//     description: string;
//     publishedAt: string;
//     source: {
//       id: null;
//       name: string;
//     };
//     title: string;
//     url: string;
//     urlToImage: string;
//   };
//   status: string;
//   totalResults: string;
// }

export interface News {
  title: any;
  link: any;
  keywords: any;
  creator: any;
  video_url: any;
  description: any;
  content: any;
  pubDate: any;
  image_url: any;
  country: any;
  language:any;
}

export interface INews {
  articles: {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
      id: null;
      name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
  };
  status: string;
  totalResults: string;
}

