const mapResults = (data) => data.map((item)=> ({
        id: item.id,
        name: item.name,
        image: item.image.medium,
        rating: item.rating.average,
        genres: item.genres,
        summary: item.summary,        
    }))

const sortByRating = (data) => {
    const compareNumbers = (a, b) => a.rating - b.rating;      
    return data.sort(compareNumbers).reverse()    
}

const sortById = (data) => {
    const compareNumbers = (a, b) => a.id - b.id;      
    return data.sort(compareNumbers)    
}

const sortByName = (data) => {
    const compareNames = (a, b)=>{
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    }
    return data.sort(compareNames)
}

export { mapResults , sortByRating, sortByName, sortById }

