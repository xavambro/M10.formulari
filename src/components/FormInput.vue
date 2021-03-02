<template>
    <div class="form-group">
      <label for="'type'" >{{label}}</label>
      <input type="'type'" :class="valid" id="'type'" v-model="inp">
      
<!--       <input type="'type'" class="form-control" id="'type'" :value="value"  @input="$emit("input",$event.target.value)" v-bind="checkValidity(inp)">
 -->
      <!-- <p v-if='error>0' class="alert alert-danger">{{msg}}</p> -->
      <div v-if='error>0' class="invalid-feedback">{{msg}}</div>
    </div>
</template>

<script>
export default {
    name:'FormInput',
    props:['type','input','label'],
    data(){
      return{
        inp:'',
        error:1,
        msg:'Camp buït',
        valid:'form-control is-invalid'
        }
    },
    computed:{
      /* errorPlus(){
        return this.error++
      },
      changeMsg(){
        return this.msg = 'asd'
      } */
      /* error(){ */
        /* get:function(){
          return this.error
        }, 
        set:function(value){
          this.error = value
        } */
        /* error=0
        return error; */
      
    },
    watch:{
      inp: function(){
        this.error =0;
        this.msg='';
        if(this.$props.input == 'inputName'){
          
          if(!this.isRequired(this.inp)||!this.isText(this.inp)||!this.validLength(this.inp)){
            this.error=1;
            this.msg='El valor no pot ser buït, ha de ser text i ha de contenir entre 6 i 13 caràcters.';
            this.isInvalid()
          }else{
              this.isValid()
          }

        }
      }
    },
    methods:{
      isValid(){
        this.valid = "form-control is-valid"
      },
      isInvalid(){
        this.valid = "form-control is-invalid"

      },
      isRequired(value){
        if(value.length===0){
          console.log("empty")
          return false
        }else{
          return true
        }
      }
      ,
      isText(value){
        
        return /^[A-Za-z]+$/.test(value);
      },

      isNumber(value){
        return /^[0-9]*$/.test(value);
      },
      isUpperAndLower(value){
        return /^(?=[a-z]+[A-Z]+|[A-Z]+[a-z]+)[a-zA-Z]$/.test(value);
      },

      validLength(value){
        console.log(value.length);
        if(value.length >= 6 && value.length < 14) {
          
          return true;
        }else{
          console.log("not valid length")
          return false;
        }

      },
      /* checkValidity(value){
        this.error =0;
         this.msg='';
        if(this.$props.input == 'inputName'){
          if(!this.isRequired(value)||!this.isText(value)||!this.validLength(value)){
            this.error=1;
            this.msg='El valor no pot ser buït, ha de ser text i ha de contenir entre 6 i 13 caràcters.';
          }

        }
        if(value=='inputMobile'){

        }
        if(value=='inputPostal'){
          
        }
        if(value=='inputEmail'){
          
        }
        if(value=='inputPass'){
          
        }
        if(value=='inputPass1'){
          
        }

      } */

      
    },
    
}
</script>