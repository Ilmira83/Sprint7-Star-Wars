export interface FilmsResponse{
  count: number,
  next: string,
  previous: string,
  results: Films[]
}
export interface Films {
  title:string,
  episode_id:string,
  opening_crawl:string,
  url:string
}
