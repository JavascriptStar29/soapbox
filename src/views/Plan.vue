<template>
    <b-card class="plan-card custom-card">
        <b-row align-h="between">
            <b-col>
                <h2 class="pricing-plan">Pricing Plans</h2>
            </b-col>
            <b-col class="monthly-switch">
                <span>Monthly</span>
                <switches v-model="isMonthly" theme="bulma" type-bold="true"></switches>
                <span>Yearly</span>
            </b-col>
        </b-row>
        <b-row class="plan-content">
            <b-col col md="4" cols="12">
                <h6 class="plan-header">Basic Plan</h6>
                <h1 class="plan-title">$29 <span>/mo</span></h1>
                <ul>
                    <li><i class="fa fa-check" aria-hidden="true"></i> 500 Messages</li>
                    <li><i class="fa fa-check" aria-hidden="true"></i> Mobile App Access</li>
                    <li><i class="fa fa-check" aria-hidden="true"></i> Etiam Tortor Ultricies</li>
                    <li><i class="fa fa-times" aria-hidden="true"></i> Fusce Tristique</li>
                    <li><i class="fa fa-times" aria-hidden="true"></i> Inceptos Mattis Fusce</li>
                    <li><i class="fa fa-times" aria-hidden="true"></i> 500 Messages</li>
                    <li><i class="fa fa-times" aria-hidden="true"></i> 500 Messages</li>
                </ul>
                <b-button variant="primary" @click="goToChoosePlan('plan1')">Choose Plan</b-button>
            </b-col>
            <b-col col md="4" cols="12">
                <h6 class="plan-header">Basic Plan</h6>
                <h1 class="plan-title">$99 <span>/mo</span> </h1>
                <ul>
                    <li><i class="fa fa-check" aria-hidden="true"></i> 500 Messages</li>
                    <li><i class="fa fa-check" aria-hidden="true"></i> Mobile App Access</li>
                    <li><i class="fa fa-check" aria-hidden="true"></i> Etiam Tortor Ultricies</li>
                    <li><i class="fa fa-check" aria-hidden="true"></i> Fusce Tristique</li>
                    <li><i class="fa fa-check" aria-hidden="true"></i> Inceptos Mattis Fusce</li>
                    <li><i class="fa fa-times" aria-hidden="true"></i> 500 Messages</li>
                    <li><i class="fa fa-times" aria-hidden="true"></i> 500 Messages</li>
                </ul>
                <b-button variant="primary" @click="goToChoosePlan('plan2')">Choose Plan</b-button>
            </b-col>
            <b-col col md="4" cols="12">
                <h6 class="plan-header">Enterprise Plan</h6>
                <h1 class="plan-title">$199 <span>/mo</span> </h1>
                <ul>
                    <li><i class="fa fa-check" aria-hidden="true"></i> 500 Messages</li>
                    <li><i class="fa fa-check" aria-hidden="true"></i> Mobile App Access</li>
                    <li><i class="fa fa-check" aria-hidden="true"></i> Etiam Tortor Ultricies</li>
                    <li><i class="fa fa-check" aria-hidden="true"></i> Fusce Tristique</li>
                    <li><i class="fa fa-check" aria-hidden="true"></i> Inceptos Mattis Fusce</li>
                    <li><i class="fa fa-check" aria-hidden="true"></i> 500 Messages</li>
                    <li><i class="fa fa-check" aria-hidden="true"></i> 500 Messages</li>
                </ul>
                <b-button variant="primary" @click="goToChoosePlan('plan3')">Choose Plan</b-button>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
import Switches from 'vue-switches';
export default {
  name: 'plan',
  components: {
      Switches
  },
  data:function() {
      return {
          isMonthly: false
      }
  },
  methods: {
      goToChoosePlan(planId) {
          this.$router.push({name: 'plandetail' , params:{id:planId}});
      }
  }
}
</script>
<style lang="scss">
    @import '@/assets/custom/_variables.scss';
    $default-font-size: 16px;
    .custom-card {
        border: none!important;
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.125);
        -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.125);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.125);
    }
    
    .plan-header {
        color: #C45BED;
        font-weight: 600;
    }
    
    .plan-card {
        padding: 30px;
        .pricing-plan {
            color: $default;
            font-size: 26px;
        }
        .monthly-switch {
            text-align: right;
            span {
                font-size: 13px;
            }
        }
        .plan-content {
            margin-top: 50px;
            font-size: $default-font-size;
            .plan-title {
                margin-bottom: 30px;
                font-size: 46px;
                span {
                    font-size: $default-font-size;
                }
            }
            ul {
                list-style: none;
                padding-left: 0px;
                li {
                    margin-bottom: 12px;
                    i {
                        width: 22px;
                        font-size: 22px;
                        font-weight: 300;
                        margin-right: 18px;
                    }
                    .fa-check {
                        color: $primary;
                    }
                    .fa-times {
                        color: #E72D14;
                    }
                }
            }
            .btn-primary {
                font-size: 15px;
                margin-top: 15px;
                border-radius: 30px!important;
                padding: 8px 25px;
            }
        }
    }
    
    @media screen and (min-width: $screen-medium-size) {
        .plan-content {
            .col:nth-child(3n+0),
            .col:nth-child(3n+2) {
                border-left: 1px solid #d8d8d8;
                padding-left: 30px;
            }
        }
    }
    
    @media screen and (max-width: $screen-medium-size) {
        .plan-content {
            .col {
                margin-bottom: 20px;
            }
        }
        .plan-card {
            text-align: center;
        }
    }
    
    .vue-switcher-theme--bulma.vue-switcher-color--default.vue-switcher--unchecked div {
        background-color: $primary;
    }
    
    .vue-switcher--bold div {
        top: 8px;
        margin: 0px 10px;
    }
</style>