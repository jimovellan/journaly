<template>
    <!--Nav of this especific layout-->
    <NavBarJournal/>

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
import { mapGetters } from 'vuex'; 

export default{
    components:{
        NavBarJournal: defineAsyncComponent(()=> /* webpackChunkName: "NavBarJournal" */ import('../components/NavBar.vue')),
        EntryList: defineAsyncComponent(()=> /* webpackChunkName: "EntryListJournal" */ import('../components/EntryList.vue'))
    },
    computed:
    {
       
    } ,
     mounted() {
        
    },

}

</script>