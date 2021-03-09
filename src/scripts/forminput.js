export default {
  name: 'FormInput',
  props: ['type', 'input', 'label', 'pass', 'reset'],
  data() {
    return {
      inp: '',
      error: true,
      msg: '',
      valid: '',
      skip: ''
    }
  },
  watch: {
    reset: function () {
      if (this.reset == true) {
        this.inp = '';
        this.skip = true;
      }
    },
    inp: function () {
      this.error = false;
      this.msg = '';
      if (this.$props.input == 'inputName' && !this.skip) {

        if (!this.isRequired(this.inp) || !this.isText(this.inp) || !this.validLength(this.inp, 6, 14)) {
          this.error = true;
          this.msg = 'El valor no pot ser buït, ha de ser text i ha de contenir entre 6 i 13 caràcters.';
          this.isInvalid()
        } else {
          this.isValid()
        }

      } else if (this.$props.input == 'inputMobile' && !this.skip) {
        if (!this.isRequired(this.inp) || !this.isNumber(this.inp) || !this.validLength(this.inp, 9, 12)) {
          this.error = true;
          this.msg = 'El valor no pot ser buït, ha de ser un número entre 9 i 11 dígits';
          this.isInvalid()
        } else {
          this.isValid()
        }
      } else if (this.$props.input == 'inputPostal' && !this.skip) {
        if (!this.isRequired(this.inp) || !this.isNumber(this.inp) || !this.validLength(this.inp, 5, 6)) {
          this.error = true;
          this.msg = 'El valor no pot ser buït, ha de ser un número de 5 dígits';
          this.isInvalid()
        } else {
          this.isValid()
        }
      } else if (this.$props.input == 'inputEmail' && !this.skip) {
        if (!this.isRequired(this.inp) || !this.isEmail(this.inp)) {
          this.error = true;
          this.msg = 'El valor no pot ser buït, ha de ser un email vàlid';
          this.isInvalid()
        } else {
          this.isValid()
        }
      } else if (this.$props.input == 'inputPass' && !this.skip) {
        if (!this.isRequired(this.inp) || !this.isUpperAndLower(this.inp) || !this.validLength(this.inp, 6, 14)) {
          this.error = true;
          this.msg = 'El valor no pot ser buït, ha de contenir una minúscula i una majúscula i entre 6 i 13 caràcters,';
          this.isInvalid()
        } else {
          this.$emit('pass', this.inp);

          this.isValid()
        }
      } else if (this.$props.input == 'inputPass1' && !this.skip) {
        if (this.inp != this.pass) {
          this.error = true;
          this.msg = 'El password ha de coincidir';
          this.isInvalid()
        } else {
          this.isValid()
        }
      }
      if (this.skip) {
        this.skip = false;
        this.valid = '';
        this.error = true;
      }

    }
  }
    ,
  methods: {
    isValid() {
      this.valid = "is-valid"
    },

    isInvalid() {
      this.valid = "is-invalid"

    },

    isRequired(value) {
      if (value.length === 0) {
        return false
      } else {
        return true
      }
    },

    isText(value) {

      return /^[A-Za-z\s]+$/.test(value);
    },

    isNumber(value) {
      return /^[0-9]*$/.test(value);
    },

    isUpperAndLower(value) {
      return /(?=.*[a-z])(?=.*[A-Z])/.test(value);
    },

    isEmail(value) {
      return /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
    },

    validLength(value, min, max) {
      if (value.length >= min && value.length < max) {

        return true;
      } else {
        console.log("not valid length");
        return false;
      }

    },

  },

  
}