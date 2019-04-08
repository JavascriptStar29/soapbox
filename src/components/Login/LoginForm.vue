<template>
    <div class="login-form text-center">
        <form @submit.prevent="logIn()">
            <h1 class="title">Soapbox</h1>
            <div class="position-relative">
                <b-form-input id="l-name" v-model="form.name" type="text" name="name" v-validate="'required'" placeholder="Name" :class="{ 'is-invalid': submitted && errors.has('name') }">
                </b-form-input>
                <div class="position-absolute span-container">
                    <span class="fa fa-cog"></span>
                </div>
            </div>
            <div class="position-relative">
                <b-form-input id="l-email" v-model="form.email" type="email" name="email" v-validate="'required|email'" placeholder="Enter email"
                    :class="{ 'is-invalid': submitted && errors.has('email') }"></b-form-input>
                <div class="position-absolute span-container">
                    <span class="fa fa-cog"></span>
                </div>
            </div>

            <b-button variant="primary" class="continue-btn" size="lg" type="submit">
                Continue
            </b-button>
        </form>
    </div>
</template>

<script>
  import authService from '@/service/authService'

  export default {
    name: "LoginForm",
    data() {
      return {
        form: {
          name: '',
          email: ''
        },
        submitted: false
      }
    },
    methods: {
        logIn() {
            this.submitted = true;
            this.$validator.validateAll().then(result=>{
                if(result) {
                    /* You can call vuex store action here; */
                    /* this.$store.dispatch("logIn",form).then((res)=>{
                        this.$router.push('/');
                    }).catch((err)=>{

                    }); */
                    /* here is only code for set token manually (test code) */
                    authService.setAuthData("xkdkkdlsl8##sey")
                    this.$router.push('/');
                }
            });
            
        }
    }
  }
</script>

<style scoped lang="scss">
    .login-form {
        background: #1E1B52;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
        padding: 0 5rem;
        color: white;
        #l-name {
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
        }
        #l-email {
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;
        }
        .title {
            margin-bottom: 3.0rem;
        }
        .continue-btn {
            margin-top: 10rem;
            margin-bottom: 2rem;
            width: 10rem;
            color: black;
        }
        .span-container {
            right: 0;
            top: 0;
            padding-right: 0.5rem;
            color: #C45BED;
            height: 100%;
            display: flex;
            align-items: center;
        }
        .form-control {
            min-width: 240px;
            border-width: 1px!important;
        }
    }
    
    .is-invalid {
        border-color: red!important;
    }
</style>