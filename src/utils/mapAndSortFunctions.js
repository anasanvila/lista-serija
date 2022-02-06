
const mapResults = (data) => data.map((item)=> ({
        id: item.id,
        name: item.name,
        image: item.image?.medium,
        rating: item.rating?.average,
        genres: item.genres,
        summary: item.summary
}))

const mapResult = (item) => {
    const castArray = item._embedded?.cast
    let tmpArr = castArray && castArray.map((cast) => ({  
        personName:cast.person?.name,
        image: cast.person?.image?.medium
    }))
    return ({
        id: item.id,
        name: item.name,
        image: item.image?.medium,
        genres: item.genres,
        summary: item.summary,
        cast: tmpArr || []
})
}

const mappedData = (data) => data.map(item=>item.show)

const sortArray = (resultData, sortMode) => {    
    let mappedResult = resultData
    if (sortMode==='id') {
        mappedResult = sortById(resultData)
    }
    if (sortMode==='name') {
        mappedResult = sortByName(resultData)
    }
    if (sortMode==='rate') {
        mappedResult = sortByRating(resultData)
    }
    return mappedResult
}

const mapAndSortResults = (res, sortMode) => {
    let result=res.data
    if (res.data[0].show) result = mappedData(res.data)

    let resultData = mapResults(result)
    return sortArray(resultData, sortMode)
}


const sortByRating = (data) => {
    const compareNumbers = (a, b) => a.rating - b.rating;      
    return data.sort(compareNumbers).reverse()    
}

const sortById = (data) => {
    const compareNumbers = (a, b) => a.id - b.id;      
    let sorted = data.sort(compareNumbers);
    return sorted;
}

const sortByName = (data) => {
    const compareNames = (a, b)=>{
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    }
    return data.sort(compareNames)
}

export { mapResult, mapAndSortResults, sortArray }

