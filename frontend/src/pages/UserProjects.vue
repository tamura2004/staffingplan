<template lang="pug">
.container
  .row
    .col-3
      .card
        .card-header.bg-inverse.text-white
          h5
            icon(name="caret-left")
            | &nbsp;
            | 2017年3月
            | &nbsp;
            icon(name="caret-right")
        .card-block
          h5 {{ users[userId].name }}
        table.table
          tbody
            tr
              td: strong 合計
              td {{ userPlanTotal.toFixed(2) }}
            tr.table-danger
              td: strong 過不足
              td {{ (1 - userPlanTotal).toFixed(2) }}

    .col-9
      table.table
        thead.bg-inverse.text-white
          tr
            th 案件管理番号
            th 案件名
            th 稼働予定（人月）
            th 操作
        tbody
          tr(v-for="userPlan in userPlans")
            td {{ projects[userPlan.projectId].number }}
            td {{ projects[userPlan.projectId].name }}
            td
              input.form-control.form-control-sm(type="number",step="0.1",v-model.number="userPlan.work")
            td
              button.btn.btn-danger.btn-sm(type="button")
                strong 削除

      button.btn.btn-primary(type="button",@click="selectPlan")
        strong 案件追加
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'hello',
  props: ['userId'],
  methods: {
    selectPlan () {
      this.$router.push({name: 'SelectProject', params: { setPlan: this.setPlan }})
    },
    setPlan (projectId) {
      console.log(this.userPlans)
      this.userPlans.push({userId: this.userId, projectId: projectId, work: 0})
      console.log(this.userPlans)
    }
  },
  computed: {
    _userPlans () {
      return this.plans.filter((p) => p.userId === this.userId)
    },
    userPlanTotal () {
      return this.userPlans.reduce((a, b) => a + b.work, 0)
    },
    ...mapGetters(['users', 'plans', 'projects'])
  },
  data () {
    return {
      userPlans: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
h5
  font-weight bold
  margin-bottom 0px
  text-align center

</style>
