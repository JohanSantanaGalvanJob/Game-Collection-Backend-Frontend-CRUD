export class Game {
    _id?: number;
    platform: string;
    title: string;
    description: string;
    genre: string;
    thumbnailUrl: string;
    metaScore:number;
    userScore:number;
    releaseDate:string;

    constructor(platform: string,title:string,description:string,genre:string,thumbnailUrl:string,metaScore:number,userScore:number,releaseDate:string) {
        this.platform = platform;
        this.title=title;
        this.description=description;
        this.genre=genre;
        this.thumbnailUrl=thumbnailUrl;
        this.metaScore=metaScore;
        this.userScore=userScore;
        this.releaseDate=releaseDate;
     }
}

