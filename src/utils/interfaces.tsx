
export interface IShows {
    id:number;
    name: string;
    image?:string;
    rating:number;
    genres:IGenre[];
    summary:string;
    cast?:ICast[] 
}
export interface IGenre {   
    name:string
}

export interface ISearch {
    show:IShowsFromAPI;
}

export interface IShowCard {
    isFavourite?: Boolean;
    key:string;
    item:IShows;
    handleAddFav?(item:IShows):void;
    handleRemoveFav?(id:number):void;
    hasFavStarIndicator:Boolean;        
}

export interface ICast {
        id:number;
        personName:string;
        image:string;
        smallImage:string;
    }

export interface ICard {
        id:number;
        image:string;
        name:string;
    }

export interface IShow {
        show:IShows
    }

export interface IImageCard {
    id?:number;
    image:string;
    name:string;
    key:string;
}

export interface ISmallImageCard {
    image:string;
    name:string;
}
    
export interface ICastListView {
        cast:ICast[] | undefined
    }

export interface ICastFromAPI {
    cast: {
        person:{
        name:string;
        image:{
            medium:string;
            original:string;
        }
    }
    }
}

export interface IShowsFromAPI {
    id:number;
    name:string;
    image:{
        medium?:string;
        original?:string;
    };
    rating:{
        average:number;
    }
    genres:string[];
    summary:string;
    _embedded?:{
        cast?:{
            person?:{
                name?:string;
                image?:{
                    medium?:string;
                    original?:string;
                }
            }
        }[]
    }
}