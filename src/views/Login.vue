<template>
    <b-container fluid class="login-screen">
        <b-row no-gutters class="h-100">
            <b-col col md="4" sm="12">
                <login-form/>
            </b-col>
            <b-col col md="8" sm="12" class="text-center">
                <login-header/>
                <b-img :src="loginImage" v-bind="loginImageProps" />
                <login-footer/>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
  import LoginForm from '@/components/Login/LoginForm'
  import LoginHeader from "@/components/Login/LoginHeader";
  import LoginFooter from "@/components/Login/LoginFooter";
  import loginImage from '@/assets/images/login_image.png'

  export default {
    name: "Login",
    components: {LoginFooter, LoginHeader, LoginForm},
    data: function () {
      return {
        loginImage,
        loginImageProps: {class: 'home-image'}
      };
    }
  }
</script>

<style lang="scss">
    .login-screen {
        height: 100vh;
        padding: 0px!important;
    }
    
    .home-image {
        max-height: calc(100% - 12rem);
        max-width: 90%;
    }
</style>