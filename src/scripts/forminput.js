export default {
    name:'FormInput',
    props:['type','input','label','pass'],
    data(){
      return{
        inp:'',
        error:true,
        msg:'Camp buït',
        valid:'form-control is-invalid',
        
        }
    },
    watch:{
      inp: function(){
        this.error =false;
        this.msg='';
        if(this.$props.input == 'inputName'){
          
          if(!this.isRequired(this.inp)||!this.isText(this.inp)||!this.validLength(this.inp)){
            this.error=true;
            this.msg='El valor no pot ser buït, ha de ser text i ha de contenir entre 6 i 13 caràcters.';
            this.isInvalid()
          }else{
              this.isValid()
          }

        }else if (this.$props.input == 'inputMobile'){
          if(!this.isRequired(this.inp)||!this.isNumber(this.inp)){
            this.error=true;
            this.msg='El valor no pot ser buït, ha de ser un número';
            this.isInvalid()
          }else{
              this.isValid()
          }
        }else if (this.$props.input == 'inputPostal'){
          if(!this.isRequired(this.inp)||!this.isNumber(this.inp)){
            this.error=true;
            this.msg='El valor no pot ser buït, ha de ser un número';
            this.isInvalid()
          }else{
              this.isValid()
          }
        }else if (this.$props.input == 'inputEmail'){
          if(!this.isRequired(this.inp)||!this.isEmail(this.inp)){
            this.error=true;
            this.msg='El valor no pot ser buït, ha de ser un email vàlid';
            this.isInvalid()
          }else{
              this.isValid()
          }
        }else if (this.$props.input == 'inputPass'){
          if(!this.isRequired(this.inp)||!this.isUpperAndLower(this.inp)||!this.validLength(this.inp)){
            this.error=true;
            this.msg='El valor no pot ser buït, ha de contenir una minúscula i una majúscula i entre 6 i 13 caràcters,';
            this.isInvalid()
          }else{
             this.$emit('pass',this.inp);
              
            this.isValid()
          }
        }else if (this.$props.input == 'inputPass1'){
          if(this.inp != this.pass){
            this.error=true;
            this.msg='El password ha de coincidir';
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
      },

      isText(value){
        
        return /^[A-Za-z]+$/.test(value);
      },

      isNumber(value){
        return /^[0-9]*$/.test(value);
      },

      isUpperAndLower(value){      
        return /(?=.*[a-z])(?=.*[A-Z])/.test(value);
      },

      isEmail(value){
        return /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
      },

      validLength(value){
        console.log(value.length);
        if(value.length >= 6 && value.length < 14) {
          
          return true;
        }else{
          console.log("not valid length");
          return false;
        }

      },
      
    }
    
}