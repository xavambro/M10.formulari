<template>
<div class="container">
  <form @submit.prevent="sendForm">
    <FormInput type="name" label="Nom:" input="inputName" @click="clicked(name)" :v-modal="inputName"></FormInput>
    <!-- <div class="form-group">
      <label for="name" >Nom:</label>
      <input type="text" class="form-control" id="name" v-model="inputName" required minlength=6 maxlength=13>
    </div> -->
    <div class="form-group">
      <label for="mobile">Mòbil:</label>
      <input type="number" class="form-control" id="mobile" v-model.number="inputMobile" required>
    </div>
    <div class="form-group">
      <label for="postal">Codi Postal:</label>
      <input type="number" class="form-control" id="postal" v-model.number="inputPostal" required>
    </div>
    <div class="form-group">
      <label for="email">E-mail:</label>
      <input type="email" class="form-control" id="email" v-model="inputEmail" required>
    </div>
    <div class="form-group">
      <label for="pass">Contrasenya:</label>
      <input type="text" class="form-control" id="pass" v-model="inputPass">
    </div>
    <div class="form-group">
      <label for="pass1">Repeteïx contrasenya:</label>
      <input type="text" class="form-control" id="pass1" v-model="inputPass1">
    </div>
    
    
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
      errors: false,
      inputName:'',
      inputMobile:'',
      inputPostal:'',
      inputEmail:'',
      inputPass:'',
      inputPass1:'',
      clickedName:false,
      

    }
  },
  components:{
    FormInput
  },
  methods:{
    /* Clicked(value){
      if(value == 'name') this.clickedName = true;
      
    } */
    sendForm(){
     let alerts = document.getElementsByClassName("alert")
     if (alerts.length > 0){
       this.errors = true;
     }else{
       this.errors = false;
     }
    }
      /* checkForm(e){

      },
      checkNull(){
        
      } */
  }
  
}
</script>

