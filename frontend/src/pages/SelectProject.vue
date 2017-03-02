<template lang="pug">
.container
  .row
    .col-8.offset-2
      h4 案件を選択して下さい
      table.table.table-sm.table-bordered
        thead.bg-inverse.text-white
          tr
            th 操作
            th プロジェクト番号
            th プロジェクト名
        tbody
          tr(v-for="project in projects")
            td(style="text-align: center")
              button.btn.btn-secondary.btn-sm(type="button",@click="selectProject(project.id)")
                strong 選択
            td.pl-3 {{ project.number }}
            td.pl-3 {{ project.name }}

          tr(v-if="edit.project")
            td(style="text-align: center")
              button.btn.btn-primary.btn-sm(type="button", @click="save_project")
                strong 保存
            td
              input(type="text", v-model="edit.project.number")
            td
              input(type="text", v-model="edit.project.name" @keydown.enter="save_project")

      //- .alert.alert-danger(role="alert")
      //-   strong 重複エラー
      //-   span プロジェクト番号が重複しました

      button.btn.btn-primary(type="button", @click="new_project", v-if="!edit.project")
        strong 案件追加

</template>

<script>
import { mapGetters } from 'vuex'
import { SAVE_PROJECT } from '@/vuex/mutation-types'

export default {
  name: 'selectProject',
  props: ['setPlan'],
  methods: {
    new_project () {
      this.edit.project = { number: '', name: '' }
    },
    save_project () {
      this.$store.dispatch(SAVE_PROJECT, this.edit.project)
      this.edit.project = null
    },
    selectProject (id) {
      this.setPlan(id)
      this.$router.go(-1)
    }
  },
  computed: mapGetters(['projects']),
  data () {
    return {
      edit: {
        project: null
      }
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

tr > th
  text-align center

td
  vertical-align center

input
  width 100%

</style>
