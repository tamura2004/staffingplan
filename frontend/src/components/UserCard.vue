<template lang="pug">
table.table.table-bordered
  thead.bg-inverse.text-white
    tr
      th.text-center(colspan="2") ◀　2017年3月　▶
  tbody
    tr
      td(colspan="2")
        h5.mb-0.text-center {{ getUserById(userId).name }}
    tr
      td.w-50
        strong 合計
      td#n.w-50 {{ userPlanTotal | decimal }}
    tr.table-danger
      td: strong 過不足
      td#n {{ 1 - userPlanTotal | decimal }}

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'userCard',
  props: ['userId'],
  computed: {
    ...mapGetters(['getPlansByUserId', 'getUserById']),
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

#n
  font-size 24px
  padding 8px
</style>
