<template>
    <div class="entry-title d-flex justify-content-between p-2">
       
        <!--Date of journaly-->
        <div>
            <span class="text-success fs-3 fw-bold">{{dateFormated.day }}</span>
            <span class="mx-1 fs-3">{{dateFormated.month }}</span>
            <span class="mx-2 fs-4 fw-light">{{dateFormated.yearAndDayOfWeek }}</span>

        </div>

        <!--Buttons to edit-->
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

    <!--Entry text of journal-->
    <div class="d-flex flex-column px-3">

        <textarea v-model="entry.text" rows="8" placeholder="¿Que has hecho hoy?"/>
        <!--Image-->
    <img :src="entry.picture" width="250" alt="..." class="img-thumbnail">
    </div>

    
    
</template>

<script>

    import { mapGetters } from 'vuex';
    import {Normalize} from '@/helpers/dates'

    export default
   {
        props:{
            id:{
                type:Number,
                required:true
            }
        },
       data() {

            return {
                
                entry:{}
            }
        }, 
        watch:{
            id(value){
                this.loadEntry(value);
                
            }
        },
        computed:{
            ...mapGetters('journal',['getEntryById']),
            dateFormated(){
                return Normalize(this.entry.date);
            }
        
        },

        methods:{
            async loadEntry(value){
                console.log(value);
                var entry = this.getEntryById(value);
                console.log(entry);
                
                if(!entry) {
                    this.$router.push({name:'not_found'});
                    return;
                } 
                 this.entry= entry;
            }
        },
       
        async mounted(){

            this.loadEntry(this.id);
        },

        // updated() {
        //    this.loadEntry();
        // },


   } 
</script>