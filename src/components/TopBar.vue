<template>
    <b-navbar toggleable="lg" class="top-bar" type="dark">
        <b-navbar-brand class="nav-logo"></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="left-nav-bar">
                <b-nav-item @click="goToRouter('Plan')" :class="{'selected-nav-item':isSelectedRoute('Plan')}">
                    <i class="fa fa-rocket"></i> Dashboard
                </b-nav-item>
                <b-nav-item @click="goToRouter('Review')" :class="{'selected-nav-item':isSelectedRoute('Review')}">
                    <i class="fa fa-star"></i> Reviews
                </b-nav-item>
                <b-nav-item @click="goToRouter('Profile')" :class="{'selected-nav-item':isSelectedRoute('Profile')}">
                    <i class="fa fa-rocket"></i> Profile
                </b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto right-nav-bar">
                <b-nav-item href="#">
                    <i class="fa fa-bell"></i>
                </b-nav-item>
                <b-nav-item @click="logOut()">
                    <i class="fa fa-unlock-alt"></i>
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import authService from '@/service/authService'
export default {
  name: 'TopBar',
  methods: {
      goToRouter(routeName) {
          this.$router.push({name:routeName});
      },
      isSelectedRoute(routeName) {
          var currentRouteName = this.$route.name;
          return currentRouteName == routeName;
      },
      logOut() {
          authService.cleanAuthData();
          this.$router.push('/login');
      }
  }
}
</script>

<style lang="scss">
    @import '@/assets/custom/_variables.scss';
    .top-bar {
        background: $default;
        color: white;
        height: 70px;
        padding: 0px!important;
        #nav-collapse {
            background: $default;
        }
        .nav-logo {
            width: 70px;
            height: 100%;
            background: $primary;
        }
        .left-nav-bar {
            margin-left: 20px;
            .nav-item {
                margin-right: 20px;
                i {
                    margin-right: 5px;
                }
            }
        }
        .right-nav-bar {
            .nav-item {
                margin-right: 15px;
            }
        }
        .navbar-nav {
            a {
                font-size: 16px;
                color: white!important;
                i {
                    font-size: 18px;
                }
            }
        }
        .selected-nav-item {
            i {
                color: $primary!important;
            }
        }
    }
</style>