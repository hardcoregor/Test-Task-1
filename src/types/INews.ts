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

export interface News {
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
}