export default () =>(
   {
    isLoading:true,
    entries:[
      {id: new Date().getTime(),
         date:new Date().toDateString(),
         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt delectus dolor, tenetur recusandae aliquid distinctio aliquam eveniet consectetur, cum doloribus sequi. Ea earum reiciendis repellendus facilis! Unde dolor dolorem inventore.',
         picture:null   
      } ,
      {id: new Date().getTime()+1,
         date:new Date().toDateString(),
         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ratione natus ut eum ea similique maiores aperiam repellendus eos ipsa quas tempora non alias architecto repellat, minima quis, consequatur quisquam.',
         picture:null   
      } ,
      {id: new Date().getTime()+3,
         date:new Date().toDateString(),
         text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat repellendus amet pariatur veniam ex nostrum, illo dolore accusamus, fugiat illum dolorem excepturi obcaecati voluptatum nam soluta consectetur quia commodi in?',
         picture:null   
      } 

    ]

   } 
)