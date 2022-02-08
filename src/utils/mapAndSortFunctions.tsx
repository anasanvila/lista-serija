
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
let tmpArr=null
if (castArray) { tmpArr = castArray.map((cast,index) => ({  
                                id:`${item.id}-${index}`,
                                personName:cast.person?.name,
                                image: cast.person?.image?.original,
                                smallImage: cast.person?.image?.medium
                            }))
                }
return ({
    id: item.id,
    name: item.name,
    image: item.image?.original,
    genres: item.genres,
    summary: item.summary,
    cast: tmpArr || []
})
}

const takeNestedData = (data) => data.map(item=>item.show)

const sortArray = (data, sortMode) => {    
let sorted = data
if (sortMode==='id') {
    sorted = sortById(data)
}
if (sortMode==='name') {
    sorted = sortByName(data)
}
if (sortMode==='rate') {
    sorted = sortByRating(data)
}
return sorted
}

const mapAndSortResults = (res, sortMode) => {
let result = res.data
if (res.data[0].show) { result = takeNestedData(res.data) }

let mappedData = mapResults(result)
return sortArray(mappedData, sortMode)
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

