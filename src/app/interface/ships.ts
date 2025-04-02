
export interface ShipsResponse{
  count: number,
  next: string,
  previous: string,
  results: Ships[]
}


export interface Ships {
  id:number
  name:string,
  model:string,
  manufacturer:string,
  max_atmosphering_speed:string,
  length:string,
  crew:string,
  starship_class:string,
  pilots: []
  url:string
}

