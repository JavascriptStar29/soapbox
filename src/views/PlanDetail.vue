<template>
    <div class="plan-details">
        <b-row>
            <b-col>
                <b-card class="custom-card plan-detail-title">
                    <h1>$199</h1>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col col md="4">
                <b-card class="custom-card">
                    <h6 class="plan-header">Premium Plan</h6>
                    <h1>$99</h1>
                </b-card>
            </b-col>
            <b-col col md="4">
                <b-card class="custom-card">

                </b-card>
            </b-col>
            <b-col col md="4">
                <b-card class="custom-card">
                    <h1>4.6k</h1>
                    <star-rating v-model="rate" :increment="0.5" :show-rating="showRatingLabel" 
                    :star-size="starSize" :read-only="starReadOnly" active-color="#393841" :star-points="starPoints"></star-rating>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  name: 'plandetail',
  components: {
      StarRating
  },
  data: function() {
      return  {
          rate: 3.5,
          showRatingLabel: false,
          starReadOnly: true,
          starPoints:[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17],
          starSize: 20
      }
  }
}
</script>
<style lang="scss">
    @import '@/assets/custom/_variables.scss';
    .plan-details {
        h1 {
            font-size: 46px;
        }
        .col {
            margin-bottom: 30px;
        }
        .plan-detail-title {
            background: $primary;
            color: $default;
        }
    }
</style>