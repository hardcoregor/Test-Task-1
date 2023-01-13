export interface INews {
  articles: {
    author: string;
    content: string;
    description: string;
    date: string;
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