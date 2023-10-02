<template>
     <button class="btn mx-2" @click="emitEventClick">
        <slot ></slot>
        <font-awesome-icon :icon="getButtonType" class="mx-2"></font-awesome-icon>
    </button>
</template>

<script>

import ButtonType from './ButtonType';


export default {

    props:{
        active:{
                type:Boolean,
                default:false
            },
        type:{
           
            type: String,
            default: ButtonType.SAVE,
            validator: (value)=>{
                
                 return Object.keys(ButtonType).findIndex((x)=> 
                {
                    
                    return ButtonType[x] == value
                })>=0;

                
            }
        }
    },
    computed:{

        getButtonType(){
            let icon = "";
            switch (this.type) {
                case ButtonType.DELETE:
                    icon = "fa fa-trash-alt"
                    break;
                case ButtonType.SAVE:
                    icon = "fa fa-upload"
                    break;
                case ButtonType.IMAGE:
                    icon = "fa fa-upload"
                break;
                case ButtonType.NEW:
                    icon = "fa fa-2x fa-plus"
                break;
            
                default:
                    break;
            }

            return icon;
        }


    },
    methods: {
        emitEventClick(){
            this.$emit("on:click");
        }
    },
    mounted() {
       
    },

}


</script>


