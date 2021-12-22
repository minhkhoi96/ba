<template>
    <div class="backdrop" @click="closeModal1">
        <div class="modal">
            
            <p> </p>
           <p> {{header}} </p>
           
           
           
           <slot></slot>
        </div>
    </div>
</template>

<script>


export default {
    props: ['header'],
    methods:{
        closeModal1(){
            this.$emit('close')
        }
    }

    
 
        
   
}
</script>


<style scoped>
.modal{
    width:400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}
.backdrop{
    top:0;
    position:fixed;
    background: rgba(0,0,0,0.5);
    width:100%;
    height:100%;
}
h1{
    color:red
}
</style>