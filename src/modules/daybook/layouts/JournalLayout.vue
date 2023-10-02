<template>
    <!--Nav of this especific layout-->
    <NavBarJournal/>

    <Loading :show="getIsLoading"/>
    <div class="d-flex">
        <div class="col-4">
            <EntryList />
        </div>
        <div class="col">
            <router-view/>
        </div>

    </div>
    
</template>

<script>
import{defineAsyncComponent}  from 'vue'
import { mapGetters,mapActions } from 'vuex'; 

export default{
    components:{
        NavBarJournal: defineAsyncComponent(()=> /* webpackChunkName: "NavBarJournal" */ import('../components/NavBar.vue')),
        EntryList: defineAsyncComponent(()=> /* webpackChunkName: "EntryListJournal" */ import('../components/EntryList.vue'))
    },
    computed:
    {
       ...mapGetters('journal',['getIsLoading'])
    } ,
    methods: {
        ...mapActions('journal',['loadEntries'])
    },
    data(){
        return{
            show:false
        }
    },
     async mounted() {
        
       await this.loadEntries();
        
    },

}

</script>