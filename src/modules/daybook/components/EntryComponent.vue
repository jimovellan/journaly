<template>
    <div
        class="entry_container pointer mb-3 p-2"
       @click="navigateToDetail">
        <div class="entry_title d-flex">
            <span class="text-success fs-5 fw-bold">25</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2023</span>

        </div>
        <div class="entry_description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt delectus dolor, tenetur recusandae aliquid distinctio aliquam eveniet consectetur, cum doloribus sequi. Ea earum reiciendis repellendus facilis! Unde dolor dolorem inventore.
        </div>

    </div>
</template>

<script>

export default{
    props:{
       id:{
        required:true,
        type:Number
       } 
    } ,
    data() {
        return {
            entry:
           {} 
        }
    },    
    methods:
    {
        navigateToDetail()
        {
            console.log(this.id);
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