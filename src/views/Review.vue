<template>
    <div>
        <b-row align-h="between">
            <b-col>
                <h3>Reviews</h3>
            </b-col>
            <b-col>
                <b-form-select class="radius-select" v-model="orderMode" :options="orderOptions"></b-form-select>
            </b-col>
        </b-row>
        <b-row class="review-section">
            <b-col col md="4" sm="12" cols="12" v-for="(section,index) in sections" :key="section">
                <review-card v-for="item in getSectionItem(index)" :data="item" ></review-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import reviewData from '@/reviewTest.json'
import ReviewCard from '@/components/Review/ReviewCard.vue'
export default {
  name: 'review',
  components: {
      ReviewCard
  },
  data:function() {
      return {
          sections: [0,1,2],
          orderMode: 'recent',
          reviewData: [],
          orderOptions: [
              {
                  "text": "Most Recent",
                  "value": "recent"
              },
              {
                  "text": "Most Rated",
                  "value": "rate"
              }
          ]
      }
  },
  mounted() {
      this.reviewData = reviewData.data;
  },
  methods:  {
      getSectionItem(index) {
          var arr = this.reviewData.filter((elm,elmIndex)=>elmIndex%3==index);
          return arr;
      }
  }

}
</script>

<style lang="scss">
    @import '@/assets/custom/_variables.scss';
    .radius-select {
        width:160px!important;
        float:right;
        cursor: pointer;
        height: 2.5rem!important;
        padding-left: 1rem!important;
        background-color: $primary!important;
        border: 1px solid $primary!important;
        font-size: 13px!important;
        border-radius: 20px!important;
        option {
            padding: 20px!important;
        }
    }
    .review-section {
        margin-top: 20px;
    }
</style>