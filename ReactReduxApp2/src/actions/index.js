//API calling will be done in this action and it will return type(refers to what kind of data ) 
//and payload(refers to the data)  
const url = "http://localhost:8900";

export function latestNews(){
    const output = fetch(`${url}/articles?_end=3`,{method:'GET'})
    .then((data) => data.json())

    return{
        type:'GET_LATEST',
        payload:output
    }
}

export function articleNews(){
    const output = fetch(`${url}/articles?_start=3&_end=10`,{method:'GET'})
    .then((data) => data.json())

    return{
        type:'GET_ARTICLE',
        payload:output
    }
}

export function galleryNews(){
    const output = fetch(`${url}/galleries?_limit=2`,{method:'GET'})
    .then((data) => data.json())

    return{
        type:'GET_GALLERY',
        payload:output
    }
}
export function selectedNews(id){
    const output = fetch(`${url}/articles?id=${id}`,{method:'GET'})
    .then((data) => data.json())

    return{
        type:'GET_SELECTED_NEWS',
        payload:output
    }
}

export function clearselectedNews(id){

    return{
        type:'CLEAR_SELECTED_NEWS',
        payload:[]
    }
}
export function handleLikes(array,id){
    const output = fetch(`${url}/articles/${id}`,
    {
        method:'PATCH',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'

        },

        body: JSON.stringify({likes:array})
    })
    .then(response => response.json())

    return{
        type:'HANDLE_LIKES',
        payload:output
    }
}
