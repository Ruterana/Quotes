export class  Quote {
    // id: number;
    // name: string;
    // author:string;
    showAuthor: boolean;
  constructor(public id: number, public writter:string, public name: string,public author: string,public completeDate: Date){
    this.showAuthor=false;
  }
  }