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
            <Button type="DELETE">Elminar</Button>
            <Button type="IMAGE" class="btn-success">Subir imagen</Button>
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
    
    import Button from '@/components/Buttons/Button.vue'
    import ButtonType from '@/components/Buttons/ButtonType';
    import { mapGetters , mapActions} from 'vuex';
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
        components:{
            Button
        },
        methods:{
            async loadEntry(value){
             
                var entry = this.getEntryById(value);
               
                
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