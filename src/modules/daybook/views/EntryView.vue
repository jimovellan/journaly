<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">15</span>
            <span class="mx-1 fs-3">Julio</span>
            <span class="mx-2 fs-4 fw-light">2023, jueves</span>

        </div>
        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <font-awesome-icon icon="fa fa-trash-alt"></font-awesome-icon>
            </button>
            <button class="btn btn-success mx-2">
                Borrar
                <font-awesome-icon icon="fa fa-upload"></font-awesome-icon>
            </button>
        </div>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">

        <textarea placeholder="¿Que has hecho hoy?">

        </textarea>
    </div>
    
</template>

<script>

    export default
   {
       data() {
        return {
            id:0
        }
       }, 
        async mounted(){

            this.id=this.$route.params.id;
        },

        updated() {
            this.id=this.$route.params.id;
        },
   } 
</script>