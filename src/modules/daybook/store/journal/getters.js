// export const myGetter = (state) =>{
//     return state;
// }


export const getEntriesByTerm =  (state) =>(term = '')=>
{
    
    if(term.length === 0) return state.entries;

    return state.entries.filter(e=>e.text.toLowerCase().includes(term.toLowerCase()));
}

export const getEntryById =  (state) =>(id = '')=>
{
    
    const entry =  state.entries.find((entry) =>{ 
              
                return entry.id === id});

    if(!entry) return undefined;

    return {...entry};

}

export const getIsLoading = (state) =>{
    return state.isLoading;
}
