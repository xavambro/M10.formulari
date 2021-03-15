import FormInput from '../components/FormInput'
import Fade from '../animations/Fade'
export default {
  name: 'Formulari',
  data(){
    return {
      pass:'',
      errors: false,
      valid: false,
    }
  },
  components:{
    FormInput,
    Fade
  },
  methods:{
    getPass(value){
      this.pass = value;
    },
    sendForm(){
     let alerts = document.getElementsByClassName("invalid-feedback");
     if (alerts.length > 0){
       this.errors = true;
       this.valid = false;
     }else{
       this.errors = false;
       this.valid = true;
     }
    }
  }
  
}