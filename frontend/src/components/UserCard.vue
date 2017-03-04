<template lang="pug">
  .card
    .card-header.bg-inverse.text-white
      h5.mb-0
        | ◀︎　2017年3月　▶︎
    .card-block
      h5 {{ user.name }}

    table.table
      tbody
        tr
          td: strong 合計
          td {{ userPlanTotal | decimal }}
        tr.table-danger
          td: strong 過不足
          td {{ 1 - userPlanTotal | decimal }}

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'userCard',
  props: ['userId'],
  computed: {
    ...mapGetters(['getPlansByUserId', 'getUserById']),
    user () {
      return this.getUserById(this.userId)
    },
    userPlanTotal () {
      let res = 0
      for (const plan of this.getPlansByUserId(this.userId)) {
        res += plan.work
      }
      return res
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.card
  p
    text-align center
  h5
    font-weight bold
    text-align center

</style>
