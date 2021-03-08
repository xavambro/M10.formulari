<template>
<div class="container">
  <form @submit.prevent="sendForm">
    <h1>Formulari</h1>
    <p v-if='errors' class="alert alert-danger">No es pot validar el formulari. Ompla els camps</p>
    <p v-if='valid' class="alert alert-success">Formulari validat correctament.</p>
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

<script src="../scripts/formulari.js">

 </script>
 
<style src="../styles/css/formulari.css" scoped>

</style>
