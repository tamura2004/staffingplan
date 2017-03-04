<template lang="pug">
.container
  .row
    .col-3
      UserCard(:userId="userId")

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
            td {{ getProjectById(userPlan.project_id).number }}
            td {{ getProjectById(userPlan.project_id).name }}
            td
              input.form-control.form-control-sm(
                type="number",
                step="0.1",
                v-model.number="userPlan.work"
              )
            td
              button.btn.btn-danger.btn-sm(type="button")
                strong 削除

      button.btn.btn-danger(type="button",@click="selectPlan")
        strong +

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

</style>
