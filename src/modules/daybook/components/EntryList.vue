<template>
   <div class="entry-list-container">
    <div class="px-2 pt-2">
        <input 
            v-model="term"
           
            type="text"
            class="form-control"
            placeholder="Buscar entradas"/>

    </div>
    <div class="entry-scrollarea">
        <Entry v-for="(entry) in  entriesByTerm"
            :key="entry.id" 
            :id="entry.id"
            :entry="entry"/>
          
       
    </div>
    </div>
</template>

<script>

import {defineAsyncComponent}  from 'vue'
import { mapGetters } from 'vuex'; 

export default{
   
    data() {
        return {
            term:''
        }
    },
    methods: {
       
    },
    computed:
    {
        ...mapGetters('journal',[
            'getEntriesByTerm']
        ),
        entriesByTerm()
       {
        return this.getEntriesByTerm(this.term)
       } 
   }, 
    components:{
        Entry: defineAsyncComponent(()=>/* webpackChunkName: "Entry" */ import('@/modules/daybook/components/EntryComponent.vue'))
   } 
}


</script>


<style lang="scss" scoped>

input{
    margin: 4px;
}

.entry-list-container{
    border-right: 1px solid;
    height: calc(100vh - 56px);
} 
.entry-scrollarea{
    padding: 20px 2px;
    height: calc(100vh - 110px);
    overflow: scroll;
}

</style>