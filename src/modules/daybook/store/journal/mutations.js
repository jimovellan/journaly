// export const myMutattions =(state)=>{

// }

export const setEntries =(state, entries)=>{
    state.entries = [...entries];
}

export const startLoading =(state)=>
{
    state.isLoading = true;
}



export const stopLoading =(state)=>
{
    state.isLoading = false;
}
