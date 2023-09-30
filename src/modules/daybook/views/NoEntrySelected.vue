<template>
    <div class="noentryselected_container d-flex justify-content-center">
        <h1 class="align-self-center">there is not entry selected</h1>
        
    </div>
    <Fab/>
</template>

<script>

import {defineAsyncComponent}  from 'vue'
export default{
    components:
    {
        Fab:defineAsyncComponent(()=> import('../components/FabComponent.vue'))
    } 
}

</script>

<style>

    .noentryselected_container{
        height:100%;
    } 
</style>