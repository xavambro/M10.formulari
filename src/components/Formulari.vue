<template>
<div class="container">
  <form @submit.prevent="sendForm">
    <h1>Formulari</h1>
    <p v-if='errors' class="alert alert-danger">No es pot validar el formulari. Comprova els camps</p>
    <FormInput type="name" label="Nom:" input="inputName"></FormInput>
    <FormInput type="mobile" label="Mòbil:" input="inputMobile"></FormInput>
    <FormInput type="postal" label="Codi Postal:" input="inputPostal"></FormInput>
    <FormInput type="email" label="Email:" input="inputEmail"></FormInput>
    <FormInput type="pass" label="Password:" input="inputPass" @pass='getPass($event)'></FormInput>
    <FormInput type="pass1" label="Repeteix password:" input="inputPass1" :pass='pass'></FormInput>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
</template>

<script>
import FormInput from './FormInput'

export default {
  name: 'Formulari',
  data(){
    return {
      pass:'',
      errors: false,
    }
  },
  components:{
    FormInput
  },
  methods:{
    getPass(value){
      this.pass = value;
    },
    sendForm(){
     let alerts = document.getElementsByClassName("invalid-feedback");
     if (alerts.length > 0){
       this.errors = true;
     }else{
       this.errors = false;
     }
    }
  }
  
}

 </script>
<style scoped>
.container{
  width:50%;
  margin-bottom:10px;
}
</style>
