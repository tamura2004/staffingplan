<template lang="pug">
.container
  .row
    .col-3
<<<<<<< HEAD
      UserCard(:userId="userId")
=======
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

>>>>>>> d69fc255c2ed20c48a5e59b53ff0083adb7910a2

    .col-9
      table.table.table-bordered
        thead.bg-inverse.text-white
          tr
            th 案件管理番号
            th 案件名
            th 稼働予定（人月）
            th 操作
        tbody
          tr(v-for="userPlan in userPlans")
<<<<<<< HEAD
            td {{ getProjectById(userPlan.project_id).number }}
            td {{ getProjectById(userPlan.project_id).name }}
            td
=======
            td {{ projects.find(function(p){return p.id == userPlan.projectId}).number }}
            td {{ projects.find(function(p){return p.id == userPlan.projectId}).name }}
            td.p-1
>>>>>>> d69fc255c2ed20c48a5e59b53ff0083adb7910a2
              input.form-control.form-control-sm(
                type="number",
                step="0.1",
                v-model.number="userPlan.work"
              )
            td
              button.btn.btn-danger.btn-sm(type="button")
                strong 削除
<<<<<<< HEAD

      button.btn.btn-danger(type="button",@click="selectPlan")
        strong +

=======
      hr
      button.btn.btn-primary(type="button",@click="selectPlan")
        strong 担当案件追加
>>>>>>> d69fc255c2ed20c48a5e59b53ff0083adb7910a2
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from '@/components/UserCard'

export default {
  name: 'userProjects',
  props: { userId: Number },
  components: { UserCard },

  computed: {
    ...mapGetters(['getProjectById', 'getPlansByUserId']),

    userPlans () {
      return this.getPlansByUserId(this.userId)
    }
  },

  methods: {
    selectPlan () {
      this.$router.push({name: 'SelectProject', params: { setPlan: this.setPlan }})
    },
    setPlan (projectId) {
      let plan = { userId: this.userId, projectId: projectId, work: 0 }
      this.$store.dispatch('CREATE_PLAN', plan)
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

input
  width 96px
  font-size 24px
</style>
