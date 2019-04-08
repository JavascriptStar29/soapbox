<template>
    <b-card class="custom-card review-card">
        <b-row>
            <b-col>
                <b-img v-bind="imgProps" :src="data.imgPath" rounded="circle" />
                <h6>{{data.name}}</h6>
                <star-rating v-model="data.rate" :increment="0.5" :show-rating="showRatingLabel" 
                    :star-size="starSize" :read-only="starReadOnly" active-color="#FD7B4F" :star-points="starPoints">
                </star-rating>
                <p>{{data.reviewDate}}</p>
                <div class="reviewNote">{{data.reviewNote}}</div>
            </b-col>
        </b-row>
        <div slot="footer"><small class="text-muted">Last updated 3 mins ago</small></div>
    </b-card>
</template>

<script>
  import StarRating from 'vue-star-rating'
  export default {
    name: "ReviewCard",
    props: ["data"],
    components: {
        StarRating
    },
    data:function() {
      return {
          imgProps: { width: 50, height:50, class: 'review-img' },
          starReadOnly: true,
          showRatingLabel: false,
          starSize: 20,
          starPoints:[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]
      }
  }
  }
</script>

<style lang="scss">
    @import '@/assets/custom/_variables.scss';
    .review-card {
        text-align: center;
        margin-bottom: 30px;
        h6 {
            font-size: 15px;
            margin: 10px 0px;
            color: #635FA3;
            font-weight: bold;
        }
        p {
            color: #9C9AAC;
            font-size: 12px;
        }
        .reviewNote {
            font-size: 15px;
            text-align: left;
            margin: 0px 10px;
            max-height: 200px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .vue-star-rating {
            margin: 0px auto 5px;
        }
        .card-footer {
            background-color: #9C9AAC!important;
            .text-muted {
                font-size: 15px;
                color: white!important;
            }
        }
    }
</style>