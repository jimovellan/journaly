<template>
    <div
        class="entry_container pointer mb-3 p-2"
       @click="navigateToDetail">
        <div class="entry_title d-flex">
            <span class="text-success fs-5 fw-bold">{{ dateNormalized.day }}</span>
            <span class="mx-1 fs-5">{{ dateNormalized.mounth }}</span>
            <span class="mx-2 fw-light">{{dateNormalized.yearAndDayOfWeek}}</span>

        </div>
        <div class="entry_description">
            {{ descriptionNormalized }}
        </div>

    </div>
</template>

<script>

import {Normalize} from '@/helpers/dates'


export default{
    props:{
       id:{
        required:true,
        type:Number
       } ,
       entry:{
         required:true,
         type:Object,

       }
    } ,
    computed:{
        descriptionNormalized(){
            return this.entry.text.length > 130 
                                                ? this.entry.text.substring(0,130) 
                                                : this.entry.text;
        },
        dateNormalized(){
            return Normalize(this.entry.date);
        }
        
    },
    methods:
    {
        navigateToDetail()
        {
           
            this.$router.push({name:'journaly_entry',params:{id:this.id}});
        } ,
        


    } 


}

</script>

<style lang="scss" scoped>
.entry_container{
    border-bottom: 1px solid #2c3e50   ;
    transition: 0.2s all ease-in;

    &:hover
    {
        font-size: 1.1em;
        background-color: lighten(grey,45);
    } 
}

</style>