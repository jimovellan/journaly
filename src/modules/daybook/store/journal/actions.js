export const loadEntries = async ({commit}) =>{

    commit('startLoading');


    setTimeout(()=>{
        var entries = [
            {id: 1,
               date:new Date().toDateString(),
               text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt delectus dolor, tenetur recusandae aliquid distinctio aliquam eveniet consectetur, cum doloribus sequi. Ea earum reiciendis repellendus facilis! Unde dolor dolorem inventore.',
               picture:"https://picsum.photos/500"
            } ,
            {id: 2,
               date:new Date().toDateString(),
               text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ratione natus ut eum ea similique maiores aperiam repellendus eos ipsa quas tempora non alias architecto repellat, minima quis, consequatur quisquam.',
               picture:"https://picsum.photos/500"
            } ,
            {id: 3,
               date:new Date().toDateString(),
               text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat repellendus amet pariatur veniam ex nostrum, illo dolore accusamus, fugiat illum dolorem excepturi obcaecati voluptatum nam soluta consectetur quia commodi in?',
               picture:"https://picsum.photos/500"
                
            } 
      
          ];
    
          commit('setEntries',entries);
          commit('stopLoading');
       
    },4000);
    
}

export const updateEntry = async()=>{
    
}

