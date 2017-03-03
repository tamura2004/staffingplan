<template lang="pug">
.container
  .row
    .col-3
      .card
        .card-header.bg-inverse.text-white
          h5.mb-0
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
              td {{ userPlanTotal | decimal }}
            tr.table-danger
              td: strong 過不足
              td {{ 1 - userPlanTotal | decimal }}

        button.btn.btn-primary(type="button",@click="selectPlan")
          strong 担当案件追加

    .col-9
      table.table.table-sm.table-bordered
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
              input.form-control.form-control-sm(
                type="number",
                step="0.1",
                v-model.number="userPlan.work"
              )
            td
              button.btn.btn-danger.btn-sm(type="button")
                strong 削除
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'hello',
  props: ['userId'],
  methods: {
    focus (event) {

    },
    selectPlan () {
      this.$router.push({name: 'SelectProject', params: { setPlan: this.setPlan }})
    },
    setPlan (projectId) {
      let plan = { userId: this.userId, projectId: projectId, work: 0 }
      this.$store.dispatch('CREATE_PLAN', plan)
    }
  },
  computed: {
    userPlans () {
      return this.plans.filter((p) => p.userId === this.userId)
    },
    userPlanTotal () {
      return this.userPlans.reduce((a, b) => a + b.work, 0)
    },
    ...mapGetters(['users', 'plans', 'projects'])
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
