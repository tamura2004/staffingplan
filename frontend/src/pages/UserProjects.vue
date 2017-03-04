<template lang="pug">
.container
  .row
    .col-3
      UserCard(:userId="userId")

    .col-9
      table.table.table-bordered
        thead.bg-inverse.text-white
          tr
            th#c1 案件管理番号
            th#c2 案件名
            th#c3 人月
            th#c4 操作
        tbody
          tr(v-for="userPlan in getPlansByUserId(userId)")
            td {{ getProjectById(userPlan.project_id).number }}
            td {{ getProjectById(userPlan.project_id).name }}
            td#c5
              input.form-control.form-control-sm(
                type="number",
                step="0.1",
                v-model.number="userPlan.work",
                autofocus=""
              )
            td
              button.btn.btn-danger.btn-sm(type="button")
                strong 削除

      button.btn.btn-danger.btn-round(type="button",@click="selectPlan")
        strong +

</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from '@/components/UserCard'

export default {
  name: 'userProjects',
  props: { userId: Number },
  components: { UserCard },

  computed: mapGetters(['getProjectById', 'getPlansByUserId']),

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

input
  width 100%
  font-size 24px
  text-align center

.btn-round
  width 40px
  height 40px
  border-radius 50%

#c1
  width 25%

#c2
  width 50%

#c3
  width 15%

#c4
  width 10%

#c5
  padding 4px
</style>
