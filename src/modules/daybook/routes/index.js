

const routes ={

    path:'/journaly',
    component: import(/* webpackChunkName: "Journal_Layout" */ '../layouts/JournalLayout.vue'),
    children:[
       {
        name:'journaly_no_entry_selected',
        path:'',
        component:import(/* webpackChunkName: "Journal_No_entry_selected" */ '../views/NoEntrySelected.vue'),
       } ,

       {
        name:'journaly_entry',
        path:':id',
        component:import(/* webpackChunkName: "Journal_Entry" */ '../views/EntryView.vue'),
        props:(router) =>{

            const id = parseInt(router.params.id);
            return {
                id 
            }
        }
       } ,
       

    ]
} 

export default routes;