<template>
    <div v-if="show" class="loading_background d-flex flex-column justify-content-center">
        <div>
           
            <font-awesome-icon icon="fa-solid fa-spinner" class="text-white" spin size="5x"></font-awesome-icon>
            <div class="text-white pt-5">Loading.....</div>
        </div>
       
    </div>
</template>

<script>


export default{
    props:{
        show:{
            type:Boolean,
            default:false
        },
        
    },
    computed:{

    }

}

</script>

<style scoped>

.loading_background
{
    background-color: rgba(0, 0, 0, 0.474);
    height: 100vh;
    width: 100%;
    position: fixed;
    top:0;
    left:0;
    z-index:10;
    transition: 4s ease-in-out;

}

</style>