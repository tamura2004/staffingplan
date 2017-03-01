<template lang="pug">
.container
  .row
    .col-8.offset-2
      table.table.table-sm.table-bordered
        thead.bg-inverse.text-white
          tr
            th 操作
            th プロジェクト番号
            th プロジェクト名
        tbody
          tr(v-for="i in 7")
            td(style="text-align: center"): button.btn.btn-secondary.btn-sm(type="button"): strong 選択
            td.pl-3 201703011201-1234
            td.pl-3 全自動餅つき機の回転数増強
      button.btn.btn-primary(type="button"): strong 案件追加

</template>

<script>
export default {
  name: 'select_project',
  props: ['user_id'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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

</style>
